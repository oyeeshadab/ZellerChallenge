// hooks/useUserDetail.ts
import { useQuery } from '@apollo/client';
import { GET_USER } from 'graphql/queries';
import { GetUserQuery } from 'graphql/types';

export const useUserDetail = (userId: string) => {
  const { loading, error, data } = useQuery<GetUserQuery>(GET_USER, {
    variables: { id: userId },
  });

  return {
    loading,
    error,
    data: data?.getZellerCustomer,
  };
};