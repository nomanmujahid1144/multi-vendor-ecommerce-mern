import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:1616",
//   baseURL: "https://server.botbenchmark.com",
});
