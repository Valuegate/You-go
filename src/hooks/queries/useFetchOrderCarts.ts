import { fetcher } from "@/public/lib/fetcher";
import { ORDERCART_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iCartResponse {

}
[];
const useFetchOrderCarts = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-cart"],
    queryFn: async () => {
      try {
        const response = await fetcher(ORDERCART_ROUTES.CART, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });
  return {
    isLoading,
    data: data as iCartResponse,
  };
};

export default useFetchOrderCarts;
