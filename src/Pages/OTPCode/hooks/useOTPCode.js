import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../hooks/useAuth";
import { loginAfter } from "../../../redux/auth/authOperation";

export const useOTPCode = () => {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const {
    user: { email },
    isOTP,
  } = useAuth();

  const handleChange = (event) => {
    const { value } = event.target;

    setCode(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      loginAfter({
        OTPCode: code,
        email,
      })
    );
  };
  return {
    handleChange,
    handleSubmit,
    email,
    isOTP,
    code
  };
};
