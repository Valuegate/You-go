import { fetcher } from "@/public/lib/fetcher";
import { USERORDERADD_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TAddPayload = { email: string; password: string };

interface iDataResponse {
    
}

const useOrderAdd = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TAddPayload) => {
      try {
        const response = await fetcher(USERORDERADD_ROUTES.ADD, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Add: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useOrderAdd;
