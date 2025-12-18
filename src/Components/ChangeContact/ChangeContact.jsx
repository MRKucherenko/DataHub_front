import { useReducer } from "react";
import { useUpdateContactMutation } from "../../redux/dataBase/dataBase";
import * as CS from "./changeContact.styled";
import { useTranslation } from "react-i18next";

export const ChangeContact = ({
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
  toggleModal,
}) => {
  const initialState = {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    gender,
    streetName,
    streetNumber,
    phone,
    email,
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "change":
        return {
          ...state,
          [action.field]: action.value,
        };

      case "reset":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const [ChangeContacts] = useUpdateContactMutation();
  const { t } = useTranslation();

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: "change",
      field: name,
      value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await ChangeContacts({
      firstName: state.firstName,
      lastName: state.lastName,
      middleName: state.middleName,
      gender: state.gender,
      dateOfBirth: state.dateOfBirth,
      streetName: state.streetName,
      streetNumber: state.streetNumber,
      phone: state.phone,
      email: state.email,
      id,
    });
    toggleModal();
  };

  const isDisable =
    state.firstName === "" ||
    state.lastName === "" ||
    state.middleName === "" ||
    state.gender === "" ||
    state.dateOfBirth === "" ||
    state.streetName === "" ||
    state.streetNumber === "" ||
    state.phone === "" ||
    state.email === "";

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
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.lastName")}
          <CS.Input
            type="text"
            value={state.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.middleName")}
          <CS.Input
            type="text"
            value={state.middleName}
            name="middleName"
            onChange={handleChange}
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.gender")}
          <CS.Select value={state.gender} name="gender" onChange={handleChange}>
            <option value="Male">{t("filter.byGender.Male")}</option>
            <option value="Female">{t("filter.byGender.Female")}</option>
          </CS.Select>
        </CS.Label>
        <CS.Label>
          {t("rowsName.dateOfBirth")}
          <CS.Input
            type="date"
            value={state.dateOfBirth}
            name="dateOfBirth"
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
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.houseNumber")}
          <CS.Input
            type="text"
            value={state.streetNumber}
            name="streetNumber"
            onChange={handleChange}
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.phone")}
          <CS.Input
            type="tel"
            value={state.phone}
            name="phone"
            onChange={handleChange}
          />
        </CS.Label>
        <CS.Label>
          {t("rowsName.email")}
          <CS.Input
            type="email"
            value={state.email}
            name="email"
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
