import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  useChangeUserMutation,
  useDeleteUserMutation,
} from "../../redux/workWithUsers/workWithUsers";
import * as CS from "./updateUserStatus.styled";
import { useTranslation } from "react-i18next";

export const UpdateUserStatus = ({ id, name, email, role }) => {
  const [status, setStatus] = useState(role);
  const { role: userRole } = useAuth();
  const [updateUserRole] = useChangeUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const {t} = useTranslation();

  const handelChange = (event) => {
    const { value } = event.target;

    setStatus(value);
    updateUserRole({
      name,
      email,
      id,
      role: status,
    });
  };

  const handleDelete = () => {
    deleteUser(id);
  };

  return (
    <CS.UserCard>
      <CS.Info>
        <CS.Name>{name}</CS.Name>
        <CS.Email>{email}</CS.Email>
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
