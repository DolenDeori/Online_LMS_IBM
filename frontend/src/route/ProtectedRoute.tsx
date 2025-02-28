import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  console.log("This is a token from protected route", token);

  return token ? <Outlet /> : <Navigate to="/auth/signin" replace />;
};

export default ProtectedRoute;
