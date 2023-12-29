import { fetcher } from "@/public/lib/fetcher";
import { PRODUCT_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

  interface productResponse {
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: string;
  numReviews: number;
  price: number;
  countinStock: number;
  createdAt: number;
  id: number;
};

interface iProductResponse {
  products: productResponse[]
}


const useSearchProduct = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["search-product"],
    queryFn: async () => {
      try {
        const response = await fetcher(`${PRODUCT_ROUTES.PRODUCT}?keyword= ` , "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });
  return {
    isLoading,
    data: data as iProductResponse,
  };
};

export default useSearchProduct;
