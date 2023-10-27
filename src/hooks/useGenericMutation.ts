/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

const useGenericMutation = <T, S>(
  key: string | Array<string>,
  func: (data: S) => Promise<AxiosResponse<T>>,
  params?: object | string,
  updater?: ((oldData: T, newData: T) => T) | undefined,
  onSuccess?: (data: AxiosResponse<any, any>, variables?: any) => void,
  onError?: (err?: AxiosError<unknown, any>) => void
) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse, AxiosError, T>(func as any, {
    onMutate: async (dataPayload) => {
      await queryClient.cancelQueries([key!, params]);
      const previousData = queryClient.getQueryData([key!, params]);
      queryClient.setQueryData<T>([key!, params], (oldData) => {
        return oldData && updater ? updater(oldData, dataPayload) : dataPayload;
      });
      return previousData;
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([key!, params], context);
      onError?.(err);
    },
    onSettled: () => {
      queryClient.invalidateQueries([key!, params]);
    },
    onSuccess: (data, variables, _) => {
      onSuccess?.(data, variables);
    },
  });
};

export { useGenericMutation };
