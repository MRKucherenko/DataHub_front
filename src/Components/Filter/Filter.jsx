import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useEffect } from "react";
import {
  selectByAge,
  selectByAlphabet,
  selectByGender,
  selectCreateAt,
  selectNotes,
} from "../../redux/filters/filterSelector";
import * as CS from "./filter.styled";
import { useFilter } from "./hooks/useFilter";

export const Filter = ({ data }) => {
  const byGender = useSelector(selectByGender);
  const byAlphabet = useSelector(selectByAlphabet);
  const createdAt = useSelector(selectCreateAt);
  const byAge = useSelector(selectByAge);
  const notes = useSelector(selectNotes);
  const { t } = useTranslation();
  const {handleFilterChange, clearFilterButton, toggleNotes} = useFilter()

  useEffect(() => {
    if(byGender !== '') {
      if(data?.totalContacts){
        toast.success(`Found on request5 - ${data?.totalContacts}`);
      }
    }
  }, [data])

  return (
    <CS.FilterForm>
      <CS.FilterSelectWrapper>
        <CS.FilterSelect
          name="By Alphabet"
          value={byAlphabet}
          onChange={handleFilterChange}
        >
          <option value="">{t("filter.byAlphabet.text")}</option>
          <option value="A-Z">{t("filter.byAlphabet.a-z")}</option>
          <option value="Z-A">{t("filter.byAlphabet.z-a")}</option>
        </CS.FilterSelect>
      </CS.FilterSelectWrapper>
      <CS.FilterSelectWrapper>
        <CS.FilterSelect
          name="By Age"
          value={byAge}
          onChange={handleFilterChange}
        >
          <option value="">{t("filter.byAge.text")}</option>
          <option value="young-old">{t("filter.byAge.young-old")}</option>
          <option value="old-young">{t("filter.byAge.old-young")}</option>
        </CS.FilterSelect>
      </CS.FilterSelectWrapper>
      <CS.FilterSelectWrapper>
        <CS.FilterSelect
          name="Create At"
          value={createdAt}
          onChange={handleFilterChange}
        >
          <option value="">{t("filter.createdAt.text")}</option>
          <option value="new-old">{t("filter.createdAt.new-old")}</option>
          <option value="old-new">{t("filter.createdAt.old-new")}</option>
        </CS.FilterSelect>
      </CS.FilterSelectWrapper>
      <CS.FilterSelectWrapper>
        <CS.FilterSelect
          name="By Gender"
          value={byGender}
          onChange={handleFilterChange}
        >
          <option value="">{t("filter.byGender.text")}</option>
          <option value="Male">{t("filter.byGender.Male")}</option>
          <option value="Female">{t("filter.byGender.Female")}</option>
        </CS.FilterSelect>
      </CS.FilterSelectWrapper>
      <CS.ClearButton type="button" onClick={clearFilterButton}>
        {t("clearButton")}
      </CS.ClearButton>
      <CS.NotesWrapper>
        {t("notesButton")}
        <input type="checkbox" onChange={toggleNotes} checked={notes} />
      </CS.NotesWrapper>
    </CS.FilterForm>
  );
};
