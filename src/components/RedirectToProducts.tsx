import { Navigate } from "react-router";

export default function RedirectToProducts() {
  return <Navigate to="/dashboard/products" replace />;
}
