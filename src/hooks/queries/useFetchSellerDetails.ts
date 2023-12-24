import { fetcher } from "@/public/lib/fetcher";
import { SELLERDETAILS_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iSellerDetailsResponse {
  image: string;
  full_name: string;
  email: string;
  phone_number: number;
  address: string;
  about_seller: string;
  id: number;
}
const useFetchSellerDetails = ({ id }: { id: number }) => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-sellerdetails", id],
    queryFn: async () => {
      try {
        const response = await fetcher(`${SELLERDETAILS_ROUTES.DETAILS}${id}`, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iSellerDetailsResponse,
    isError,
    isSuccess,
  };
};

export default useFetchSellerDetails;
