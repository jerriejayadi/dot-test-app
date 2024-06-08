import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "ngrok-skip-browser-warning": "any",
  },
});

api.interceptors.response.use((response) => {
  return response.data;
});

export default api;
