import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './Firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Add this helper function inside the component
  const handleUserDocument = async (user, defaultData) => {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      email: user.email,
      ...defaultData
    });
    return userRef;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (!userDoc.exists()) {
            // Create user document if it doesn't exist
            await handleUserDocument(user, { role: 'user' });
            setUserRole('user');
          } else {
            setUserRole(userDoc.data()?.role || 'user');
          }
          setCurrentUser(user);
        } catch (error) {
          console.error("Error:", error);
          setCurrentUser(null);
          setUserRole(null);
        }
      } else {
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <RoleContext.Provider value={{ currentUser, userRole, loading, setUserRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};