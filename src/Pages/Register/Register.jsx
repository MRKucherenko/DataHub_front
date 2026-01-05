import { useTranslation } from "react-i18next";
import { FiEye, FiEyeOff } from "react-icons/fi";
import * as CS from "./register.styled";
import { useShowPass } from "./hooks/useShowPass";
import { useRegister } from "./hooks/useRegister";

export const Register = () => {
  const { t } = useTranslation();
  const { showPass, heandleShowPass } = useShowPass();
  const { heandleChange, heandleSubmit, fullName, email, password } = useRegister();

  return (
    <>
      <CS.Form onSubmit={heandleSubmit}>
        <CS.Label>
          {t("register.fullName")}
          <CS.Input
            type="text"
            value={fullName}
            name="fullName"
            onChange={heandleChange}
            placeholder="John Smith"
          />
        </CS.Label>
        <CS.Label>
          {t("register.email")}
          <CS.Input
            type="text"
            value={email}
            name="email"
            onChange={heandleChange}
            placeholder="example@email.com"
          />
        </CS.Label>
        <CS.Label>
          {t("register.password")}
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
        <CS.Button type="submit">{t("register.registerButton")}</CS.Button>
        <CS.StyledLink to="/login">{t("register.registerText")}</CS.StyledLink>
      </CS.Form>
    </>
  );
};
