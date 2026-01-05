import { useState } from "react";
import { useChangeUserMutation, useDeleteUserMutation } from "../../../redux/workWithUsers/workWithUsers";

export const useUpdateUserStatus = ({ id, name, email, role }) => {
  const [updateUserRole] = useChangeUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [status, setStatus] = useState(role);

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
  return {
    handelChange,
    handleDelete,
    status
  }
}