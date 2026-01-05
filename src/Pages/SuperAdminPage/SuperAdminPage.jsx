import { useTranslation } from "react-i18next";
import { Statisticts } from "../../Components/Statistics/Statistics";
import { UpdateUserStatus } from "../../Components/UpdateUserStatus/UpdateUserStatus";
import { useGetAllUsersQuery } from "../../redux/workWithUsers/workWithUsers";
import * as CS from "./superAdmin.styled";
import { useTopStreets } from "./hooks/useTopStreets";

export const SuperAdminPage = () => {
  const { data } = useGetAllUsersQuery();
  const { t } = useTranslation();
  const { statistics, topStreet } = useTopStreets();

  return (
    <CS.PageWrapper>
      <CS.UserList>
        {data?.users?.map(({ id, name, role, email }) => (
          <UpdateUserStatus
            key={id}
            id={id}
            name={name}
            role={role}
            email={email}
          />
        ))}
      </CS.UserList>

      <CS.ChartsWrapper>
        <div>
          <CS.StatTitle>{t("statistics.gender")}</CS.StatTitle>
          <Statisticts
            data={{
              totalNumberOfPeopel: statistics?.data.totalNumberOfPeopel,
              totalNumberOfMen: statistics?.data.totalNumberOfMen,
              totalNumberOfWomen: statistics?.data.totalNumberOfWomen,
            }}
          />
        </div>
        <div>
          <CS.StatTitle>{t("statistics.byAge")}</CS.StatTitle>
          <Statisticts
            data={{
              value0_17: statistics?.data.ageGroups["0-17"],
              value18_30: statistics?.data.ageGroups["18-30"],
              value31_45: statistics?.data.ageGroups["31-45"],
              value46_60: statistics?.data.ageGroups["46-60"],
              value60: statistics?.data.ageGroups["60+"],
            }}
          />
        </div>
        <div>
          <CS.StatTitle>{t("statistics.topStreets")}</CS.StatTitle>
          <Statisticts data={topStreet} />
        </div>
      </CS.ChartsWrapper>
    </CS.PageWrapper>
  );
};
