import { useReducer } from "react";
import { useUpdateContactMutation } from "../../../redux/dataBase/dataBase";

export const useChangeContact = ({
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

  return {
    handleChange,
    handleSubmit,
    state,
    isDisable
  }
}