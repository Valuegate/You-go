import { fetcher } from "@/public/lib/fetcher";
import { SELLER_PRODUCTS_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iSellerProductResponse {
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
  id: number;
}[];
const useFetchSellerProduct = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-seller-product"],
    queryFn: async () => {
      try {
        const response = await fetcher(SELLER_PRODUCTS_ROUTES.PRODUCTS, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });
  return {
    isLoading,
    data: data as iSellerProductResponse[],
  };
};

export default useFetchSellerProduct;
