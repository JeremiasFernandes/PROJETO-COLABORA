import axios from "axios";

const api = axios.create({
  baseURL: "https://colabora-api.herokuapp.com/",
});

export default api;