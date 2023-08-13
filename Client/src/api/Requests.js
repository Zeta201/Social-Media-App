import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:9090/social" });
let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
// API.interceptors.request.use((req) => {
//   req.headers["Content-Type"] = "application/json;charset=UTF-8";
//   req.headers["Access-Control-Allow-Origin"] = "*";
//   return req;
// });

export const getAllUsers = () => API.get("/sentiment/hello-api", axiosConfig);
export const getGreet = () => API.get("/greet", axiosConfig);
// const fetchUsers = () => {
//   fetch("http://localhost:9090/social/sentiment/hello-api", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
