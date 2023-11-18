import { fetcher } from "@/public/lib/fetcher";
import { USER_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iUserResponse {
  email: string;
  phone_number: string;
  profile_picture: null;
  full_name: string;
  password: string;
}
[];
const useFetchUser = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-user"],
    queryFn: async () => {
      try {
        const response = await fetcher(USER_ROUTES.USER, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iUserResponse,
  };
};

export default useFetchUser;
