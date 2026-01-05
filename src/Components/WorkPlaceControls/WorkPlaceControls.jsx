import { useTranslation } from "react-i18next";
import { useToggleModal } from "../../hooks/useToggleModal";
import { Filter } from "../Filter/Filter";
import { SearchBar } from "../SearchBar/SearchBar";
import * as CS from '../../Pages/WorkPlace/workPlace.styled'

export const WorkPlaceControls = ({ data, role }) => {
  const { toggleModal } = useToggleModal();
  const { t } = useTranslation();

  return (
    <>
      {role !== "guest" && (
        <CS.Controls>
          <CS.LeftControls>
            <Filter data={data} />
          </CS.LeftControls>
          <CS.RightControls>
            {role === "admin" ||
              (role === "superAdmin" && (
                <CS.AddButton type="button" onClick={toggleModal}>
                  {t("addButton")}
                </CS.AddButton>
              ))}
            <SearchBar data={data} />
          </CS.RightControls>
        </CS.Controls>
      )}
    </>
  );
};
