import QRCode from "react-qr-code";
import * as CS from "./qrScreen.styled";
import { useTranslation } from "react-i18next";

export default function QRScreen({ otpAuthUrl }) {
  const { t } = useTranslation();
  return (
    <CS.Container>
      <CS.Title>{t("qrScreen.title")}</CS.Title>

      <CS.QRWrapper>
        <QRCode value={otpAuthUrl} />
      </CS.QRWrapper>

      <CS.Description>{t("qrScreen.description")}</CS.Description>
    </CS.Container>
  );
}
