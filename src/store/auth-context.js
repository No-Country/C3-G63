
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
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

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
  }, []);

  return (
    <Context.Provider
      value={{ signup, login, logout, user }}>{children}
    </Context.Provider>
  );
};
