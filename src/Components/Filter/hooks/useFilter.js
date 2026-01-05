import { useDispatch, useSelector } from "react-redux";
import {
  filterByAlphabet,
  filterByAge,
  filterByGender,
  filterCreateAt,
  filterNotes,
  clearFilters,
} from "../../../redux/filters/filterReducer";
import { selectNotes } from "../../../redux/filters/filterSelector";
export const useFilter = () => {
    const dispatch = useDispatch();
      const notes = useSelector(selectNotes);

    const toggleNotes = () => {
      dispatch(filterNotes(!notes));
    };
  
    const handleFilterChange = (event) => {
      const { name, value } = event.target;
  
      switch (name) {
        case "By Alphabet":
          dispatch(filterByAlphabet(value));
          return;
  
        case "By Age":
          dispatch(filterByAge(value));
          return;
  
        case "Create At":
          dispatch(filterCreateAt(value));
          return;
  
        case "By Gender":
          dispatch(filterByGender(value));
          return;
  
        default:
          return;
      }
    };
  
    const clearFilterButton = () => {
      dispatch(clearFilters());
    };
  return {
    clearFilterButton,
    handleFilterChange,
    toggleNotes
  }
}