import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import * as CS from "./statistics.styled";
import { useStatistics } from "./hooks/useStatistics";

export const Statisticts = ({ data }) => {
  const COLORS = ["#FF8042", "#0088FE", "#07ff6a", "#ff0000", "#d103ff"];
  const {preparedData} = useStatistics({data});

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
