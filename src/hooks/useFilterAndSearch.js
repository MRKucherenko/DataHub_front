// import {
//   selectSearch,
  // selectByAge,
  // selectByAlphabet,
  // selectByGender,
  // selectCreateAt,
// } from "../redux/filters/filterSelector"; 
// import { useSelector } from "react-redux";
  
// export const useFilterAndSearch = (arr) => { 
//   const search = useSelector(selectSearch);
  // const byAlphabet = useSelector(selectByAlphabet);
  // const byAge = useSelector(selectByAge);
  // const createdAt = useSelector(selectCreateAt);
  // const byGender = useSelector(selectByGender);
  // const searchByName = arr
  //   .filter(
  //     (contacts) =>
  //       contacts?.lastName?.toLowerCase().includes(search.toLowerCase()) ||
  //       contacts?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
  //       contacts?.dateOfBirth?.includes(search) ||
  //       contacts?.phone?.includes(search) ||
  //       contacts?.streetName?.toLowerCase().includes(search.toLowerCase()) ||
  //       contacts?.streetNumber?.includes(search) 
  //     )
//       .filter((contact) =>
//         byGender
//           ? contact?.gender?.toLowerCase() === byGender.toLowerCase()
//           : true
//       )
//       .sort((a, b) => {
//         if (byAlphabet === "A-Z") {
//           return a.lastName.localeCompare(b.lastName);
//         } else if (byAlphabet === "Z-A") {
//           return b.lastName.localeCompare(a.lastName);
//         }
//         return 0;
//       })
//       .sort((a, b) => {
//         if (byAge === "young-old") {
//           return (
//             new Date(b.dateOfBirth).getTime() - new Date(a.dateOfBirth).getTime()
//           );
//         } else if (byAge === "old-young") {
//           return (
//             new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime()
//           );
//         }
//         return 0;
//       }).sort((a, b) => {
//         if (createdAt === "new-old") {
//           return (
//             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//           );
//         } else if (byAge === "old-new") {
//           return (
//             new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
//           );
//         }
//         return 0
//       })
//       return searchByName
// }