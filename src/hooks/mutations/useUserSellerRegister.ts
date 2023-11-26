import { fetcher } from "@/public/lib/fetcher";
import { USERSELLERREGISTER_ROUTES } from "@/public/services/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type TSignupPayload = { email: string; password: string; full_name: string; phone_number: string; address: string; brand_name: string; social_business_bio: string; website: string; short_business_bio: string };

interface iDataResponse {
    full_name: string;
    email: string;
    phone_number: number;
    address: string;
    brand_name: string;
    social_media_urls: string;
    short_business_bio: string;
    website: string;
    password: string;
    // is_staff: true;
}

const useUserSellerRegister = () => {
  const mutation = useMutation({
    mutationFn: async (payload: TSignupPayload) => {
      try {
        const response = await fetcher(USERSELLERREGISTER_ROUTES.SIGNUP, "POST", payload);
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

export default useUserSellerRegister;
