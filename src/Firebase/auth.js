// Add these imports to your auth.js
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./Firebase"; // Make sure db is exported from your Firebase config
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
  reload
} from "firebase/auth";

// Initialize Google provider with account selection
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account', // Always show account selector
  login_hint: '' // Clear any cached email
});

// Common error messages
const authErrorMessages = {
  'auth/email-already-in-use': 'This email is already registered.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/weak-password': 'Password should be at least 6 characters.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/popup-closed-by-user': 'Sign in was cancelled.',
  'auth/cancelled-popup-request': 'Sign in popup was cancelled.',
  'auth/popup-blocked': 'Popup was blocked. Please allow popups for this site.'
};

const getAuthErrorMessage = (errorCode) => {
  return authErrorMessages[errorCode] || 'An error occurred. Please try again.';
};

export const doCreateUserWithEmailAndPassword = async (email, password, displayName, role = 'user') => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Update user profile with display name
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }

    // Create user document with role
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email,
      displayName: displayName || '',
      role: role, // Now accepts role parameter
      createdAt: new Date()
    });

    await reload(userCredential.user);

    return {
      user: userCredential.user,
      role: role
    };
  } catch (error) {
    throw new Error(getAuthErrorMessage(error.code));
  }
};

export const doSignInWithEmailAndPassword = async (email, password, requestedRole) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));

    if (!userDoc.exists()) {
      await signOut(auth);
      throw new Error('auth/user-not-found');
    }

    const userRole = userDoc.data().role || 'user';

    // Verify the requested role matches the user's actual role
    if (requestedRole && requestedRole !== userRole) {
      await signOut(auth);
      throw new Error('auth/unauthorized-role');
    }

    return {
      user: userCredential.user,
      role: userRole
    };
  } catch (error) {
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  try {
    // Configure provider for each attempt
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
      login_hint: ''
    });

    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw new Error(getAuthErrorMessage(error.code));
  }
};

export const doSignOut = async () => {
  try {
    // Clear any Google session data
    if (window.google && window.google.accounts) {
      window.google.accounts.id.disableAutoSelect();
    }
    await signOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
    throw new Error('Failed to sign out. Please try again.');
  }
};



export { googleProvider };