import axios from "axios";

export const Client = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { Accept: "application/json" },
});

Client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

Client.interceptors.response.use(
  (response) => response,
  ({ response }) => response
);
export const ERR = (res: any) => axios.isAxiosError(res);
