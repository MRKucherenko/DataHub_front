import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RestrictedSuperAdmin = ({ component, reDirectTo }) => {
  const { role } = useAuth();
  return (
    <>
      {role === "superAdmin" ? component : <Navigate to={reDirectTo} replace />}
    </>
  );
};
