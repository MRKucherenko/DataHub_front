import React, { useCallback, useState } from "react";
import { Modal } from "../Modal/Modal";
import { useAuth } from "../../hooks/useAuth";
import * as CS from "./contactItem.styled";
import { ContactById } from "../ContactById/ContactById";
import { useTranslation } from "react-i18next";

export const ContactItem = React.memo(
  ({
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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { role } = useAuth();
    const {t} = useTranslation();

    const toggleModal = useCallback(() => {
      setIsOpenModal(!isOpenModal);
    }, [isOpenModal]);
    return (
      <>
        <CS.TableRow
          isAdmin={role === "admin" || role === "superAdmin"}
          onClick={toggleModal}
        >
          <CS.Cell>{lastName}</CS.Cell>
          <CS.Cell>{firstName}</CS.Cell>
          <CS.Cell>{middleName}</CS.Cell>
          <CS.Cell>{t(`filter.byGender.${gender}`)}</CS.Cell>
          <CS.Cell>{dateOfBirth}</CS.Cell>
          <CS.Cell>{streetName}</CS.Cell>
          <CS.Cell>{streetNumber}</CS.Cell>
          <CS.Cell>{phone}</CS.Cell>
          <CS.Cell>{email}</CS.Cell>
        </CS.TableRow>

        {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <ContactById 
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
            notes={notes}
            />
        </Modal>
        )}
      </>
    );
  }
);
