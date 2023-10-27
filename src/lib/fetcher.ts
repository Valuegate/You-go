import { AxiosResponse } from "axios";
import axiosInstance from "../services";

export const fetcher = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" = "GET",
  data?: any
): Promise<AxiosResponse<T>> => {
  const instance = axiosInstance();
  try {
    const response = await instance.request<T>({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
