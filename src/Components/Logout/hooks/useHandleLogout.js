import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../../redux/auth/authOperation";

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
