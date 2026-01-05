import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authOperation";
import { toast } from "react-toastify";

export const useHandelLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("By, see you");
  };

  return {
    handleLogout,
  };
};
