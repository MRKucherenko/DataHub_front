import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginBefore } from "../../redux/auth/authOperation";
import { useNavigate } from "react-router-dom";
import * as CS from "./login.styled";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const heandleShowPass = () => {
    setShowPass(!showPass);
  };
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

  return (
    <CS.Form onSubmit={heandleSubmit}>
      <CS.Label>
        {t("login.email")}
        <CS.Input
          type="text"
          value={email}
          name="email"
          onChange={heandleChange}
          placeholder="example@email.com"
        />
      </CS.Label>
      <CS.Label>
        {t("login.password")}
        <CS.PasswordWrapper>
          <CS.Input
            type={!showPass ? "password" : "text"}
            value={password}
            name="password"
            onChange={heandleChange}
          />
          <CS.ShowPassButton type="button" onClick={heandleShowPass}>
            {showPass ? <FiEyeOff /> : <FiEye />}
          </CS.ShowPassButton>
        </CS.PasswordWrapper>
      </CS.Label>
      <CS.Button type="submit">{t("login.loginButton")}</CS.Button>
      <CS.StyledLink to="/register">{t("login.loginText")}</CS.StyledLink>
    </CS.Form>
  );
};
