import { fetcher } from "@/public/lib/fetcher";
import useApi from "../useApi";
// import { useRequestProcessor } from "../useRequestProcessor";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLogin = () => {
  // const api = useApi();

  const mutation = useMutation({
    mutationFn: (payload) => {
      return fetcher("/api/auth/login", "POST", payload);
    },
  });

  const { mutate, isError, isSuccess, isPending } = mutation;

  return {
    login: mutate,
    isLoading: isPending,
    isError,
    isSuccess,
  };
};

export default useLogin;
