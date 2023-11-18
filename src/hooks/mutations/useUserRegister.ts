import { fetcher } from "@/public/lib/fetcher";
import { USERREGISTER_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TSignupPayload = { email: string; password: string; phone_number: string; full_name: string;  };

interface iDataResponse {
    email : string;
    phone_number : number | string;
    full_name: string;
    password: string;
}

const useUserRegister = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TSignupPayload) => {
      try {
        const response = await fetcher(USERREGISTER_ROUTES.SIGNUP, "POST", payload);
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

export default useUserRegister;
