import { useTranslation } from "react-i18next";
import * as CS from "./notes.styled";
import { useNotes } from "./hooks/useNotes";

export const Notes = ({ notes, id }) => {
  const { t } = useTranslation();
  const { note, handelChange } = useNotes({ id, notes });

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
