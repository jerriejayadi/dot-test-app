import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const accessToken = localStorage.getItem("secret_token");

  return accessToken ? <Outlet /> : <Navigate replace to={"/login"} />;
}
