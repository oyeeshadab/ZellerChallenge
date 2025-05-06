// useUserList.ts
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LIST_USERS } from 'graphql/queries';
import { ListUsersQuery } from 'graphql/types';
import { ZellerCustomer } from './UserList.types';

type Role = 'ADMIN' | 'MANAGER';

export const useUserList = () => {
  const { loading, error, data, refetch } = useQuery<ListUsersQuery>(LIST_USERS);

  const [selectedRole, setSelectedRole] = useState<Role>('ADMIN');
  const [filtered, setFiltered] = useState<ZellerCustomer[] | undefined>([]);

  useEffect(() => {
    const filteredUsers = data?.listZellerCustomers?.items.filter(
      (user: ZellerCustomer) => user.role === selectedRole
    );
    setFiltered(filteredUsers);
  }, [data, selectedRole]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (err) {
      console.error('Refetch error:', err);
    } finally {
      setRefreshing(false);
    }
  };

  return {
    loading,
    error,
    filtered,
    selectedRole,
    setSelectedRole,
    refreshing,
    onRefresh,
  };
};
