import { useReducer } from "react";
import { useAddContactMutation } from "../../../redux/dataBase/dataBase";
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

export const useAddContacts = ({data, toggleModal}) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [addContacts] = useAddContactMutation();

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
  const isDisable =
    state.firstName === "" ||
    state.lastName === "" ||
    state.middleName === "" ||
    state.gender === "" ||
    state.date === "" ||
    state.streetName === "" ||
    state.streetNumber === "" ||
    state.phone === "" ||
    state.email === "";

    return{
      handleChange,
      handleSubmit,
      state,
      isDisable
    }
}