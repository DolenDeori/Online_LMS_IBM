import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  // console.log("This is a token", token);

  return token ? <Outlet /> : <Navigate to="/auth/signin" replace />;
};

export default ProtectedRoute;
