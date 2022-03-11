import React, { useState, useContext, createContext } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { Context } from "../../store/auth-context";
  

const AuthProvider = ({ children }) => {

    // Get Auth Context
    const AuthContext = createContext(null);

    // Hooks
    const navigate = useNavigate();
    const location = useLocation();

    // Token state
    const [token, setToken] = useState(null);

    // User credentials from context
    const context = useContext(Context);

    // On login
    const handleLogin = () => {
        setToken(context.user.accessToken);

        // Smart redirect to previous page
        // - Get path name of current page
        // - OR the login page
        const origin = location.state?.from?.pathname || "/login";
        navigate(origin);
    }

    // On logout
    const handleLogout = () => {
        setToken(null);
    }

    // Put handles and token on an object
    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    // Return this components with all of his children inside
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;