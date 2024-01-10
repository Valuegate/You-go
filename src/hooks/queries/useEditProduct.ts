import { formFetcher } from "@/public/lib/fetcher";
import { SELLER_EDIT_PRODUCT_ROUTE } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


export type TEditProductPayload = {
    name: string,
    brand: string,
    description: string,
    category: string,
    price: string,
    countinStock: string,
    id: string,
    uploaded_images: File[]
}

interface iEditPayload {
    product: TEditProductPayload
}


const useEditProduct = ({product} : iEditPayload) => {
  const mutation = useMutation({
    mutationFn: async () => {
      try {
        const response = await formFetcher(`${SELLER_EDIT_PRODUCT_ROUTE.EDIT}${product.id}/`, "PUT", product);
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Edit: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as any,
  };
};


export default useEditProduct;
