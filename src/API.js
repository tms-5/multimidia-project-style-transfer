import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 50000,
});
export default api;
