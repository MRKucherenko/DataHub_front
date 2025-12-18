import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import * as CS from "./statistics.styled";
import { useTranslation } from "react-i18next";

export const Statisticts = ({ data }) => {
  const {t} = useTranslation();
  const COLORS = ["#FF8042", "#0088FE", "#07ff6a", "#ff0000", "#d103ff"];

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
      totalNumberOfMen !== undefined && { name: t("statistics.byGender.male"), value: totalNumberOfMen },
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

  return (
    <CS.StatsCard>
      <PieChart width={300} height={300}>
        <Pie
          data={preparedData}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={130}
          paddingAngle={5}
          dataKey="value"
        >
          {preparedData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </CS.StatsCard>
  );
};