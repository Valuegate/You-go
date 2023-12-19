import { formFetcher } from "@/public/lib/fetcher";
import {
  SELLER_EDIT_PRODUCT_IMAGE_ROUTE,
} from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TEditProductImage = {
  product_id: string;
  image: File | null;
};

interface iEditPicturePayload {
  product: TEditProductImage;
}

const useEditProductImage = ({ product }: iEditPicturePayload) => {
  const mutation = useMutation({
    mutationFn: async () => {
      try {
        const response = await formFetcher(
          `${SELLER_EDIT_PRODUCT_IMAGE_ROUTE.IMAGE}`,
          "POST",
          product
        );
        return response.data;
      } catch (err) {
        throw err;
      }
    },
  });

  const { mutate, isError, isSuccess, isPending, error, data } = mutation;

  return {
    Upload: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
    error: error as AxiosError,
    data: data as any,
  };
};

export default useEditProductImage;
