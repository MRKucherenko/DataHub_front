import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import * as CS from "./updateUserStatus.styled";
import { useUpdateUserStatus } from "./useUpdateUserStatus/useUpdateUserStatus";

export const UpdateUserStatus = ({ id, name, email, role }) => {
  const { role: userRole } = useAuth();
  const { t } = useTranslation();
  const { handelChange, handleDelete, status } = useUpdateUserStatus({
    id,
    name,
    email,
    role,
  });

  return (
    <CS.UserCard>
      <CS.Info>
        <CS.Name>{name}</CS.Name>
        <CS.Email>{email}</CS.Email>
        <CS.Role>{role}</CS.Role>
      </CS.Info>

      {userRole === "superAdmin" && (
        <CS.Actions>
          <CS.Select value={status} onChange={handelChange}>
            <option value="guest">{t("role.guest")}</option>
            <option value="user">{t("role.user")}</option>
            <option value="admin">{t("role.admin")}</option>
            <option value="superAdmin">{t("role.superAdmin")}</option>
          </CS.Select>
          <CS.DeleteButton type="button" onClick={handleDelete}>
            {t("delete")}
          </CS.DeleteButton>
        </CS.Actions>
      )}
    </CS.UserCard>
  );
};
