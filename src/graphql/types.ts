export type User = {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    role: string;
  };

  export type ListUsersQuery = {
    __typename?: 'Query';
    listZellerCustomers: {
      __typename?: 'UserConnection';
      items: Array<User>;
    };
  };

  export type GetUserQuery = {
    __typename?: 'Query';
    getUser: User;
  };