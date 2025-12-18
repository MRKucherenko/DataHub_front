import { selectByAge, 
  selectByAlphabet, 
  selectByGender, 
  selectCreateAt, 
  selectKeySearch,
  selectNotes
} from "../redux/filters/filterSelector";4
import { useSelector } from "react-redux";

export const useFilter = () => {
  const byAlphabet = useSelector(selectByAlphabet);
  const byAge = useSelector(selectByAge);
  const createdAt = useSelector(selectCreateAt);
  const byGender = useSelector(selectByGender);
  const keySearch = useSelector(selectKeySearch)
  const notes = useSelector(selectNotes)

  return {
    byAlphabet,
    byAge,
    createdAt,
    byGender,
    keySearch,
    notes
  }
}