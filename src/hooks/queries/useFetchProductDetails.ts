import { fetcher } from "@/public/lib/fetcher";
import { PRODUCTDETAILS_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iProductsDetailsResponse {
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: string | null;
  numReviews: number;
  price: number | string;
  countinStock: number;
  createdAt: string;
  user: number | null;
  id: number;
}
const useFetchProductDetails = ({ id }: { id: number }) => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-productdetails", id],
    queryFn: async () => {
      try {
        const response = await fetcher(`${PRODUCTDETAILS_ROUTES.DETAILS}${id}`, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iProductsDetailsResponse,
    isError,
    isSuccess,
  };
};

export default useFetchProductDetails;
