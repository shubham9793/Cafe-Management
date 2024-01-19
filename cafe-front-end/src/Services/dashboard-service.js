import { isLoggedIn } from "../Auth";
import { myAxios, privateAxios } from "./Helper";
import { checkToken } from "./use-service";

// export const getDashboardDetails = () => {
//   if (isLoggedIn()) {
//     if (localStorage.getItem("token") === checkToken()) {
//       return myAxios
//         .get("/dashboard/details")
//         .then((response) => response.data);
//     }
//   } else {
//     return null;
//   }
// };


export const getDashboardDetails =()=>{
    return privateAxios.get("/dashboard/details").then(response=>response.data);
}