import { fetcher } from "@/public/lib/fetcher";
import { SELLER_DELETE_PRODUCT_ROUTE } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";


const useDeleteProduct = ({id}) => {
  const mutation = useMutation({
    mutationFn: async () => {
      try {
        const response = await fetcher(`${SELLER_DELETE_PRODUCT_ROUTE.DELETE}${id}/`, "DELETE");
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Delete: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as any,
  };
};

export default useDeleteProduct;
