import axios from "axios";
import { AxiosError, AxiosResponse } from "axios";
const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: `http://localhost:3000`,
});

api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        console.error(data, "bad request");
        break;

      case 401:
        console.error("unauthorized");
        break;

      case 404:
        console.error("/not-found");
        break;

      case 500:
        console.error("/internal-server-error");
        break;
      default:
        console.error(error);
        break;
    }
    return Promise.reject(error);
  }
);

export default api;
