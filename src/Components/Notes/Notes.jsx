import { useState } from "react";
import * as CS from "./notes.styled";
import { useUpdateNoteMutation } from "../../redux/dataBase/dataBase";
import { useTranslation } from "react-i18next";

export const Notes = ({ notes, id }) => {
  const [note, setNote] = useState(notes ?? "");
  const [updateNote] = useUpdateNoteMutation();
  const {t} = useTranslation();

  const handelChange = (event) => {
    const { value } = event.target;
    updateNote({ note: value, id });
    setNote(value);
  };

  return (
    <>
      <CS.Label>
        {t("notesButton")}
        <CS.TextArea
          cols={30}
          rows={4}
          maxLength={200}
          onChange={handelChange}
          value={note}
        />
      </CS.Label>
    </>
  );
};
