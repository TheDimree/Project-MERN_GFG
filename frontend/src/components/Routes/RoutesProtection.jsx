import { isLoggedIn, isAdmin } from '../services/AuthService'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = ({ children }) => { 
    return isLoggedIn() ? children : <Navigate to="/" />;   // It returns JSX
}
const AdminProtectedRoutes = ({ children }) => { 
    return isLoggedIn() && isAdmin() ? children : <Navigate to="/dashboard" />;   // It returns JSX
}

export {ProtectedRoutes, AdminProtectedRoutes}