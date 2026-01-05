import * as CS from "./seachBar.styled";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { filterKeySearch } from "../../redux/filters/filterReducer";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useAuth } from "../../hooks/useAuth";
import { useGetStatisticsQuery } from "../../redux/dataBase/dataBase";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const {data} = useGetStatisticsQuery();
  const {role} = useAuth();

  const debounceChange = useCallback(
    debounce((text) => {
      dispatch(filterKeySearch(text));
    }, 500),
    []
  );

  useEffect(() => {
    if (role !== "guest") {
      if(data?.data?.totalNumberOfPeopel){
        toast.success(`Found on request - ${data?.data?.totalNumberOfPeopel}`);
      }
    }
  }, [data]);

  const heandleChange = (event) => {
    setValue(event.target.value);
    debounceChange(event.target.value);
  };

  return (
    <CS.Form>
      <CS.Input type="text" value={value} onChange={heandleChange} />
      <CS.Icon>
        <IoIosSearch />
      </CS.Icon>
    </CS.Form>
  );
};
