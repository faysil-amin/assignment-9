import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
const GoogleProvider = new GoogleAuthProvider();

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
  const signWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const emailVer = (userAuth) => {
    return sendEmailVerification(userAuth);
  };
  const passwordRecover = (email) => {
    return sendPasswordResetEmail(auth, email);
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
    signWithGoogle,
    emailVer,
    passwordRecover,
    user,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
