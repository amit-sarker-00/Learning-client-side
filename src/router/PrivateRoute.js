import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <FadeLoader className="m-auto" animation="border" color="#36d7b7" />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
