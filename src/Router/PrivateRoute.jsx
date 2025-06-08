import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContex } from '../Components/AuthContex'; 
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
