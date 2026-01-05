import { useTranslation } from "react-i18next";
import { FiEye, FiEyeOff } from "react-icons/fi";
import * as CS from "./login.styled";
import { useShowPass } from "./hooks/useShowPass";
import { useLogin } from "./hooks/useLogin";

export const Login = () => {

  const { t } = useTranslation();
  const {showPass, heandleShowPass} = useShowPass();
  const {heandleChange, heandleSubmit, email, password} = useLogin();

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
