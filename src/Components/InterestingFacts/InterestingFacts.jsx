import { useState } from "react";
import { useGetStatisticsQuery } from "../../redux/dataBase/dataBase";
import { useTranslation } from "react-i18next";
import * as CS from "./interestingFacts.styled";
import { useAuth } from "../../hooks/useAuth";

export const InterestingFacts = () => {
  const { data } = useGetStatisticsQuery();
  const { isLogin } = useAuth();

  const [facts] = useState(() => {
    const random = Math.floor(Math.random() * 4) + 1;
    return random;
  });
  const { t } = useTranslation();

  return (
    <>
      {isLogin ? (
        <CS.FactsContainer>
          {data?.data?.length === 0 && (
            <CS.FactTitle>{t("interestingFacts.addPeople")}</CS.FactTitle>
          )}

          {data?.data?.length !== 0 && facts === 1 && (
            <CS.FactTitle>
              {t("interestingFacts.averageAge", { age: data?.data.averageAge })}
            </CS.FactTitle>
          )}

          {data?.data?.length !== 0 && facts === 2 && (
            <CS.FactTitle>
              {t("interestingFacts.numberOfWomen")}
              <CS.FactNumber>{data?.data.totalNumberOfWomen}</CS.FactNumber>
            </CS.FactTitle>
          )}

          {data?.data?.length !== 0 && facts === 3 && (
            <CS.FactTitle>
              {t("interestingFacts.numberOfMan")}
              <CS.FactNumber>{data?.data.totalNumberOfMen}</CS.FactNumber>
            </CS.FactTitle>
          )}

          {data?.data?.length !== 0 && facts === 4 && (
            <CS.FactTitle>
              {t("interestingFacts.totalNumber", {
                count: data?.data.totalNumberOfPeopel,
              })}
            </CS.FactTitle>
          )}
        </CS.FactsContainer>
      ) : (
        <CS.FactsContainer>
          <CS.FactTitle>
            {t("interestingFacts.interestingFactsNoLogin")}
          </CS.FactTitle>
        </CS.FactsContainer>
      )}
    </>
  );
};
