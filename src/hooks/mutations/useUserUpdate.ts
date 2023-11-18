import { fetcher } from "@/public/lib/fetcher";
import { USERUPDATE_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TUpdatePayload = { firstname: string; username: string  };

interface iDataResponse {
    email : string;
    first_name: string;
    id: number;
    isAdmin: boolean;
    token: string;
    username: string;
    _id: number;
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
    Signup: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useUserUpdate;
