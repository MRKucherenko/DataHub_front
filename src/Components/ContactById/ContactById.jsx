import { useTranslation } from "react-i18next";
import { useDeleteContactMutation } from "../../redux/dataBase/dataBase";
import { useAuth } from "../../hooks/useAuth";
import * as CS from "./contactById.styled";
import { ChangeContact } from "../ChangeContact/ChangeContact";
import { Modal } from "../Modal/Modal";
import { Notes } from "../Notes/Notes";
import { useToggleModal } from "../../hooks/useToggleModal";

export const ContactById = ({
  firstName,
  lastName,
  middleName,
  gender,
  dateOfBirth,
  streetName,
  streetNumber,
  phone,
  email,
  id,
  notes
}) => {
  const { t } = useTranslation();
  const [deleteContact] = useDeleteContactMutation();
  const { role } = useAuth();
  const {toggleModal, isOpenModal} = useToggleModal();

  return (
    <CS.ContactContainer>
      <CS.InfoGrid>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.firstName")}</CS.Label>
          <CS.Value>{firstName}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.lastName")}</CS.Label>
          <CS.Value>{lastName}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.middleName")}</CS.Label>
          <CS.Value>{middleName}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.gender")}</CS.Label>
          <CS.Value>{gender}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.dateOfBirth")}</CS.Label>
          <CS.Value>{dateOfBirth}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.street")}</CS.Label>
          <CS.Value>{streetName}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.houseNumber")}</CS.Label>
          <CS.Value>{streetNumber}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.phone")}</CS.Label>
          <CS.Value>{phone}</CS.Value>
        </CS.InfoItem>
        <CS.InfoItem>
          <CS.Label>{t("rowsName.email")}</CS.Label>
          <CS.Value>{email}</CS.Value>
        </CS.InfoItem>
      </CS.InfoGrid>
       <Notes notes={notes} id={id}/>
      {(role === "admin" || role === "superAdmin") && (
        <CS.Actions>
          <CS.Button type="button" onClick={toggleModal}>
            {t("changeContact")}
          </CS.Button>

          <CS.Button
            type="button"
            variant="danger"
            onClick={() => deleteContact(id)}
          >
            {t("delete")}
          </CS.Button>
        </CS.Actions>
      )}

      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <ChangeContact
            toggleModal={toggleModal}
            firstName={firstName}
            lastName={lastName}
            middleName={middleName}
            gender={gender}
            dateOfBirth={dateOfBirth}
            streetName={streetName}
            streetNumber={streetNumber}
            phone={phone}
            email={email}
            id={id}
          />
        </Modal>
      )}
    </CS.ContactContainer>
  );
};
