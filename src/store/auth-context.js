import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "../firebase";

export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
   const googleProvider =  new GoogleAuthProvider()
   return signInWithPopup(auth, googleProvider)
  }

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
    })
  }, []);

  return <Context.Provider value={{ signup, login, logout, user, loginWithGoogle }}>{children}</Context.Provider>;
};
