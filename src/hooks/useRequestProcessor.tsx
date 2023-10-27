import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useRequestProcessor = () => {
  const queryClient = useQueryClient();

  const query = (key, queryFunction, options = {}) => {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  };

  const mutate = (key, mutationFunction, options = {}) => {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  };

  return { query, mutate };
};
