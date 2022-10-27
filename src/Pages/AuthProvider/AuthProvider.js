import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User log in with email
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user log out
  const logOut = () => {
    return signOut(auth);
  };

  // user info
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  // update user profile
  const updateUserProfile = (profile) => {
    return updateUserProfile(auth.currentUser, profile);
  };

  // google login
  const registerWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    createUser,
    logIn,
    logOut,
    user,
    updateUserProfile,
    registerWithGoogle,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
