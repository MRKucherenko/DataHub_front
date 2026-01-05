import { useGetStatisticsQuery } from "../../../redux/dataBase/dataBase";

export const useTopStreets = () => {
    const { data: statistics } = useGetStatisticsQuery();

    const topStreet = statistics
      ? Object.entries(statistics?.data.topStreet)
          .map(([street, count]) => ({
            street,
            count,
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)
      : [];

  return {
    statistics,
    topStreet
  }
}