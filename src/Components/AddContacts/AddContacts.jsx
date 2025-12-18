import { useReducer } from "react";
import * as CS from "../AddContacts/addContact.styled";
import {
  useAddContactMutation,
} from "../../redux/dataBase/dataBase";
import { useTranslation } from "react-i18next";
import {toast} from 'react-toastify';


const initialState = {
  firstName: "",
  lastName: "",
  middleName: "",
  date: "",
  gender: "",
  streetName: "",
  streetNumber: "",
  phone: "",
  email: "",
  note: "",
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

export const AddContacts = ({ toggleModal , data}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [addContacts] = useAddContactMutation();
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
    const result = data?.data?.find((element) => element.email === state.email);

    if (result) {
      toast.warn('Change Email')
      return;
    }
    const value = {
      firstName: state.firstName,
      lastName: state.lastName,
      middleName: state.middleName,
      gender: state.gender,
      dateOfBirth: state.date,
      streetName: state.streetName,
      streetNumber: state.streetNumber,
      phone: state.phone,
      email: state.email,
      note: state.note,
    };
    await addContacts(value);
    toast.success('You have add the contact');
    toggleModal();
  };

  const isDesablet =
    state.firstName === "" ||
    state.lastName === "" ||
    state.middleName === "" ||
    state.gender === "" ||
    state.date === "" ||
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
        <CS.Button type="submit" disabled={isDesablet}>
          {t("addButton")}
        </CS.Button>
      </CS.Form>
    </>
  );
};
