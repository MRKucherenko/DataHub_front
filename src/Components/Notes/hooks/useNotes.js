import { useState } from "react";
import { useUpdateNoteMutation } from "../../../redux/dataBase/dataBase";

export const useNotes = ({id, notes}) => {
    const [note, setNote] = useState(notes ?? "");
    const [updateNote] = useUpdateNoteMutation();

  const handelChange = (event) => {
      const { value } = event.target;
      updateNote({ note: value, id });
      setNote(value);
    };
  return {
    note, 
    handelChange
  }
}