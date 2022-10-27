import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
const auth = getAuth(app);
export const AuthContext = createContext();
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
  const authInfo = { createUser, logIn, logOut, user };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
