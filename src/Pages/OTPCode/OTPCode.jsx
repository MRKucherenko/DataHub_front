import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAfter } from "../../redux/auth/authOperation";
import { useAuth } from "../../hooks/useAuth";
import * as CS from "./oTPCode.styled";
import { useTranslation } from "react-i18next";
import QRScreen from "../../Components/QRScreen/QRScreen";
import { Modal } from "../../Components/Modal/Modal";

export const OTPCode = () => {
  const [code, setCode] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const {
    user: { email },
    isOTP,
  } = useAuth();
  const { t } = useTranslation();

  const handleChange = (event) => {
    const { value } = event.target;

    setCode(value);
  };

  const toggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      loginAfter({
        OTPCode: code,
        email,
      })
    );
  };

  return (
    <>
      <CS.Form onSubmit={handleSubmit}>
        <CS.Label>
          {t("otpCode.text")}
          <CS.Input type="text" value={code} onChange={handleChange} />
        </CS.Label>
        <CS.Button type="submit">{t("otpCode.button")}</CS.Button>
      </CS.Form>
      <CS.qRButton type="button" onClick={toggleModal}>Open QR</CS.qRButton>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <QRScreen otpAuthUrl={`${isOTP}`} />
        </Modal>
      )}
    </>
  );
};
