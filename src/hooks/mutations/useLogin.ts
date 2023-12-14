import { fetcher } from "@/public/lib/fetcher";
import { AUTH_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TLoginPayload = { email: string; password: string; is_staff: boolean; };

interface iDataResponse {
    access: string;
    email : string;
    first_name: string;
    full_name: string;
    id: number | string;
    is_staff: boolean;
    refresh: string;
    token: string;
    username: string;
    userType: string;
}

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TLoginPayload) => {
      try {
        const response = await fetcher(AUTH_ROUTES.LOGIN, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    login: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useLogin;
