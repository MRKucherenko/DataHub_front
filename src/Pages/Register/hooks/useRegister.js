import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerBefore } from "../../../redux/auth/authOperation";

export const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const heandleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(
      registerBefore({
        name: fullName,
        email,
        password,
      })
    );
    toast.success("Check you`r email");
    navigate("/OTP");
  };

  const heandleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        return;

      case "password":
        setPassword(value);
        return;

      case "fullName":
        setFullName(value);
        return;

      default:
        return;
    }
  };

  return {
    heandleChange,
    heandleSubmit,
    email,
    fullName,
    password
  };
};
