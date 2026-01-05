import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RestrictedOTPRoute = ({ reDirectTo, component }) => {
  const { isOTP, token } = useAuth();
  const shouldReDirect = !isOTP && token;
  return (
    <>{shouldReDirect ? <Navigate to={reDirectTo} replace /> : component}</>
  );
};
