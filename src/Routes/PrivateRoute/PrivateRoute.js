import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute;