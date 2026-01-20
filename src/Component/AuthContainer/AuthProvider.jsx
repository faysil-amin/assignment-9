import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singOut = () => {
    return signOut(auth);
  };
  const userProfile = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };
  useEffect(() => {
    const unsubscript = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscript();
    };
  }, []);
  const userInfo = {
    creatUser,
    signInUser,
    singOut,
    setUser,
    userProfile,
    user,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
