import { formFetcher } from "@/public/lib/fetcher";
import { USERCREATEPRODUCT_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TCreatePayload = { name: string; uploaded_images: File | File[]; brand: string; description: string; category: string; price: string; countinStock: string; };

interface iDataResponse {
    name: string;
    uploaded_images: File | File[];
    brand: string;
    description: string;
    category: string;
    price: string;
    countinStock: string;
}

const useCreateProduct = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TCreatePayload) => {
      try {
        const response = await formFetcher(USERCREATEPRODUCT_ROUTES.CREATE, "POST", payload);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    addProduct: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as iDataResponse,
  };
};

export default useCreateProduct;
