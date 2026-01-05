import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginBefore } from "../../../redux/auth/authOperation";

export const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const heandleSubmit = async (event) => {
      event.preventDefault();
      await dispatch(
        loginBefore({
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
  
        default:
          return;
      }
    };
  
  return{
    heandleChange,
    heandleSubmit,
    email,
    password
  }
}