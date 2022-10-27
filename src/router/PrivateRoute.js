import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <FaSpinner animation="border" variant="warning" />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
