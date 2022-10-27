import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User log in with email
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user log out
  const logOut = () => {
    return signOut(auth);
  };

  // user info
  useEffect(() => {
    setLoading(false);
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  // update user profile
  // setLoading(true);
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // google login
  // setLoading(true);
  const registerWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  // Github login
  // setLoading(true);
  const registerWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    createUser,
    logIn,
    logOut,
    user,
    loading,
    updateUserProfile,
    registerWithGoogle,
    registerWithGithub,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
