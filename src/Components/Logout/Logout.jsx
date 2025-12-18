import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperation";
import * as CS from "./logout.styled";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const Logout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();


  const handleLogout = () => {
    dispatch(logout());
    toast.success('By, see you')
  };
  return (
    <>
      <CS.Button type="button" onClick={handleLogout}>
        {t("logout")}
      </CS.Button>
    </>
  );
};
