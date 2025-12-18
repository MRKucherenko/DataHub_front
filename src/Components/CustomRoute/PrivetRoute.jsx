import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"

export const PrivetRoute = ({reDirectTo, component}) => {
  const {isLogin, isRefreshenUser, token, isOTP} = useAuth();
  const shoudeReDirect = !isLogin && !isRefreshenUser && !token && !isOTP;

  return ( 
    shoudeReDirect? <Navigate to={reDirectTo} replace /> : component
  )
};