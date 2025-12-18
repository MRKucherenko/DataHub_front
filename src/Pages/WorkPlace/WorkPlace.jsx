import { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../../Components/Modal/Modal";
import { ContactItem } from "../../Components/ContactItem/ContactItem";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Filter } from "../../Components/Filter/Filter";
import * as CS from "./workPlace.styled";
import colomsName from "../../data/colomsName.json";
import { useTranslation } from "react-i18next";
import { useFilter } from "../../hooks/useFilter";
import { useGetAllContactsQuery } from "../../redux/dataBase/dataBase";
import { AddContacts } from "../../Components/AddContacts/AddContacts";

export const WorkPlace = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { role } = useAuth();
  const ref = useRef();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { byAlphabet, byAge, byGender, createdAt, keySearch, notes } =
    useFilter();
  const { data, isFetching } = useGetAllContactsQuery(
    { page, byAlphabet, byAge, byGender, createdAt, keySearch, notes },
    { refetchOnMountOrArgChange: true }
  );
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    if (data?.data?.length) {
      setAllPages((prev) => {
        if (page === 1) {
          return data.data;
        }
        const merged = [...prev, ...data.data];
        const unique = Array.from(
          new Map(merged.map((item) => [item._id, item])).values()
        );

        return unique;
      });
    }
  }, [data, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isFetching &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 50 &&
        page < data?.totalPages
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, page]);

  useEffect(() => {
    setPage(1);
  }, [byAlphabet, byAge, byGender, createdAt, keySearch]);

  const toggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <CS.Wrapper>
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
        {isOpenModal && (
          <Modal toggleModal={toggleModal}>
            <AddContacts toggleModal={toggleModal} data={data} />
          </Modal>
        )}
        {role !== "guest" && (
          <CS.TableWrapper>
            <CS.TableHeader isAdmin={role === "admin" || role === "superAdmin"}>
              {colomsName.map(({ id, text }) => (
                <span key={id}>{t(`rowsName.${text}`)}</span>
              ))}
            </CS.TableHeader>
            <div ref={ref}>
              {allPages.map(
                ({
                  firstName,
                  lastName,
                  middleName,
                  gender,
                  dateOfBirth,
                  _id,
                  phone,
                  email,
                  streetName,
                  streetNumber,
                  note,
                }) => (
                  <ContactItem
                    key={_id}
                    id={_id}
                    firstName={firstName}
                    lastName={lastName}
                    middleName={middleName}
                    gender={gender}
                    dateOfBirth={dateOfBirth}
                    phone={phone}
                    email={email}
                    streetName={streetName}
                    streetNumber={streetNumber}
                    notes={note}
                  />
                )
              )}
            </div>
          </CS.TableWrapper>
        )}
      </CS.Wrapper>
    </>
  );
};
