import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import QRScreen from "../../Components/QRScreen/QRScreen";
import { Modal } from "../../Components/Modal/Modal";
import { useOTPCode } from "./hooks/useOTPCode";
import * as CS from './oTPCode.styled'

export const OTPCode = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();
  const {handleChange, handleSubmit, isOTP, code} = useOTPCode();

  const toggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
