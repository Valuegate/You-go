import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useRequestProcessor = () => {
  const queryClient = useQueryClient();

  const useCustomQuery = (key, queryFunction, options = {}) => {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  };

  const useCustomMutate = (key, mutationFunction, options = {}) => {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  };

  return { useCustomQuery, useCustomMutate };
};
