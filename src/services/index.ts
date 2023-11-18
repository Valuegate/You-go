import axios from "axios";


const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 500000,
});

axiosInstance.interceptors.request.use((request) => {
  const userToken = localStorage.getItem("userToken"); // Retrieve the user's token from storage

  if (userToken) {
    request.headers.Authorization = `Bearer ${userToken}`;
  } else {
    request.headers.Authorization = undefined;
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in Axios response:", error);
    throw error;
  }
);

export default axiosInstance;
