import { useSelector } from "react-redux"
import { selectIsLogin, selectIsOTP, selectIsRefreshUser, selectRole, selectToken, selectUser } from "../redux/auth/authSelector"

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const isRefreshUser = useSelector(selectIsRefreshUser);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const role = useSelector(selectRole);
  const isOTP = useSelector(selectIsOTP)

  return {
    isLogin,
    isRefreshUser,
    token,
    user,
    role,
    isOTP
  }
}