import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContex } from '../Components/AuthContex'; 
import Loader from '../Components/Loader';
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) return <Loader></Loader>;

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
