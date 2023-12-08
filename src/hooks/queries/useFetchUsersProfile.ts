import { fetcher } from "@/public/lib/fetcher";
import { USERSPROFILE_ROUTES } from "@/public/services/routes";
import { useQuery } from "@tanstack/react-query";

interface iUsersProfileResponse {
  email: string;
  full_name: string|null;
  phone_number: string|null;
  profile_picture: string|null;
  password: string;
  is_staff: boolean;
}
[];
const useFetchUsersProfile = () => {
  const { isLoading, data, isError, isSuccess } = useQuery({
    queryKey: ["fetch-userprofile"],
    queryFn: async () => {
      try {
        const response = await fetcher(USERSPROFILE_ROUTES.USERS, "GET");
        return response?.data;
      } catch (err) {
        throw err;
      }
    },
  });

  return {
    isLoading,
    data: data as iUsersProfileResponse,
    isError,
    isSuccess,
  };
};

export default useFetchUsersProfile;
