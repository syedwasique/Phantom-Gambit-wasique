import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc,setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
export const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role || "user");
          } else {
            // Create user document if it doesn't exist
            await setDoc(doc(db, "users", user.uid), {
              email: user.email,
              role: "user",
              createdAt: new Date()
            });
            setUserRole("user");
          }
          setCurrentUser(user);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserRole("user");
        }
      } else {
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    userRole,
    loading,
    setCurrentUser, // Expose setter
    setUserRole,    // Expose setter
    isAdmin: userRole === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}