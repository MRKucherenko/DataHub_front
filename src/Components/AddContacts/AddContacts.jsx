import * as CS from "../AddContacts/addContact.styled";
import { useTranslation } from "react-i18next";
import { useAddContacts } from "./hooks/useAddContacts";

export const AddContacts = ({ toggleModal, data }) => {
  const { t } = useTranslation();
  const { state, handleChange, handleSubmit, isDisable} = useAddContacts({
    data,
    toggleModal,
  });

  return (
    <>
      <CS.Form onSubmit={handleSubmit}>
        <CS.Label>
          {t("rowsName.firstName")}
          <CS.Input
            type="text"
            value={state.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="John"
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.lastName")}
          <CS.Input
            type="text"
            value={state.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Smith"
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.middleName")}
          <CS.Input
            type="text"
            value={state.middleName}
            name="middleName"
            onChange={handleChange}
            placeholder="Alexandrovich"
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.gender")}
          <CS.Select value={state.gender} name="gender" onChange={handleChange}>
            <option value="" disabled>
              {t("rowsName.genderChose")}
            </option>
            <option value="Male">{t("filter.byGender.Male")}</option>
            <option value="Female">{t("filter.byGender.Female")}</option>
          </CS.Select>
        </CS.Label>
        <CS.Label>
          {t("rowsName.dateOfBirth")}
          <CS.Input
            type="date"
            value={state.date}
            name="date"
            onChange={handleChange}
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.street")}
          <CS.Input
            type="text"
            value={state.streetName}
            name="streetName"
            onChange={handleChange}
            placeholder="Example Street"
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.houseNumber")}
          <CS.Input
            type="text"
            value={state.streetNumber}
            name="streetNumber"
            onChange={handleChange}
            placeholder="10/01"
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.phone")}
          <CS.Input
            type="tel"
            value={state.phone}
            name="phone"
            onChange={handleChange}
            placeholder="+1 234 567 890"
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.email")}
          <CS.Input
            type="email"
            value={state.email}
            name="email"
            onChange={handleChange}
            placeholder="example@email.com"
          />
        </CS.Label>
        <CS.Label>
          {t("notesButton")}
          <CS.TextArea
            cols={30}
            rows={4}
            maxLength={200}
            name="note"
            value={state.note}
            onChange={handleChange}
          />
        </CS.Label>
        <CS.Button type="submit" disabled={isDisable}>
          {t("addButton")}
        </CS.Button>
      </CS.Form>
    </>
  );
};
