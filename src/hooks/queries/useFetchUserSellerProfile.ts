import { fetcher } from "@/public/lib/fetcher";
import { USERSELLERPROFILE_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iUsersSProfileResponse {
  email: string;
  full_name: null;
  phone_number: null;
  profile_picture: null;
  password: string;
}
[];
const useFetchUsersSProfile = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-usersellerprofile"],
    queryFn: async () => {
      try {
        const response = await fetcher(USERSELLERPROFILE_ROUTES.USERSELLER, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iUsersSProfileResponse,
    isError,
    isSuccess,
  };
};

export default useFetchUsersSProfile;
