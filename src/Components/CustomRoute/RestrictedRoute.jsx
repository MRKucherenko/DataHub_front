import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RestrictedRoute = ({ reDirectTo, component }) => {
  const { isLogin } = useAuth();
  return (
    <>
      {isLogin ? <Navigate to={reDirectTo} replace />: component}
    </>
  );
};
