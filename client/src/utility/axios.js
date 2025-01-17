import axios from "axios";

const serverPort = import.meta.env.PORT || 5000;

export const axiosInstance = axios.create({
  //local endpoint reference
  // baseURL: `http://localhost:${serverPort}/api/v1`,

  // deployed endpoint reference
  baseURL: "https://evangadiforumproject-hellen.onrender.com/api/v1",
});
