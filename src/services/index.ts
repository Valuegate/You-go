import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 500000,
  };
  let lastSession: Session | null = null;
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (request) => {
    if (lastSession == null || Date.now() > Date.parse(lastSession.expires)) {
      const session = await getSession();
      lastSession = session;
    }
    if (lastSession) {
      console.log("LAST SESSION HERE", lastSession);
      request.headers.Authorization = `Bearer ${lastSession?.user}`;
    } else {
      request.headers.Authorization = undefined;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error", error);
      throw error;
    }
  );
  return instance;
};

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   timeout: 500000,
// });

// axiosInstance.interceptors.request.use((request) => {
//   const userToken = localStorage.getItem("userToken"); // Retrieve the user's token from storage

//   if (userToken) {
//     request.headers.Authorization = `Bearer ${userToken}`;
//   } else {
//     request.headers.Authorization = undefined;
//   }

//   return request;
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.error("Error in Axios response:", error);
//     throw error;
//   }
// );

export default axiosInstance;
