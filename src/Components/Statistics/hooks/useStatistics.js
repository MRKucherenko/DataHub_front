import { useTranslation } from "react-i18next";

export const useStatistics = ({data}) => {
  const { t } = useTranslation();
  let preparedData;

  if (Array.isArray(data)) {
    preparedData = data.map((item) => ({
      name: item.street || item.name,
      value: item.count || item.value,
    }));
  } else {
    const {
      totalNumberOfPeopel,
      totalNumberOfMen,
      totalNumberOfWomen,
      value0_17,
      value18_30,
      value31_45,
      value46_60,
      value60,
    } = data;

    preparedData = [
      totalNumberOfPeopel !== undefined && {
        name: t("statistics.byGender.allPeople"),
        value: totalNumberOfPeopel,
      },
      totalNumberOfMen !== undefined && {
        name: t("statistics.byGender.male"),
        value: totalNumberOfMen,
      },
      totalNumberOfWomen !== undefined && {
        name: t("statistics.byGender.female"),
        value: totalNumberOfWomen,
      },

      value0_17 !== undefined && { name: "0-17", value: value0_17 },
      value18_30 !== undefined && { name: "18-30", value: value18_30 },
      value31_45 !== undefined && { name: "31-45", value: value31_45 },
      value46_60 !== undefined && { name: "46-60", value: value46_60 },
      value60 !== undefined && { name: "60+", value: value60 },
    ].filter(Boolean);
  }
  return {
    preparedData
  }
}