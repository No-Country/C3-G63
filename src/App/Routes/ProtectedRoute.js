import { useContext } from "react";
import { useLocation, Navigate } from 'react-router-dom';
import { Context } from "../../store/auth-context";

const ProtectedRoute = ({ children }) => {

    // User credentials from context
    const context = useContext(Context);
    const token = context.user?.accessToken;

    // Location Hook
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;