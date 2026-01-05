import { useTranslation } from "react-i18next";
import * as CS from "./logout.styled";
import { useHandelLogout } from "./hooks/useHandleLogout";

export const Logout = () => {
  const { t } = useTranslation();
  const {handleLogout} = useHandelLogout();

  return (
    <>
      <CS.Button type="button" onClick={handleLogout}>
        {t("logout")}
      </CS.Button>
    </>
  );
};
