import { gql } from '@apollo/client';

export const LIST_USERS = gql`
   query {
    listZellerCustomers {
      items {
        id
        name
        email
        role
      }
    }
  }
`;
export const GET_USER = gql`
  query getZellerCustomer($id: String!) {
    getZellerCustomer(id: $id) {
      id
      name
      email
      role
    }
  }
`;

export const GET_USERS_BY_ROLE = gql`
  query ListZellerCustomers($role: String) {
    listZellerCustomers(role: $role) {
      items {
        id
        name
        email
        role
      }
    }
  }
`;