import axiosInstance from "../services";
import createAuth from "../services/auth";

const useApi = () => {
  const instance = axiosInstance();
  const api = {
    auth: createAuth(instance),
    HttpClient: instance,
  };
  return api;
};

export default useApi;
