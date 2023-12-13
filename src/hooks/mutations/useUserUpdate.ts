import { fetcher } from "@/public/lib/fetcher";
import { USERUPDATE_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TUpdatePayload = { full_name: string; image: string; phone_number: number | string; email: string; about_seller: string; address: string; password: string;  };

interface iDataResponse {
    email: string,
    image: string,
    full_name: string,
    phone_number: number | string,
    password: string,
    address: string,
    about_seller: string,
}

const useUserUpdate = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TUpdatePayload) => {
      try {
        const response = await fetcher(USERUPDATE_ROUTES.UPDATE, "PUT", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Update: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useUserUpdate;
