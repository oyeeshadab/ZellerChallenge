import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import awsConfig from '../../aws-exports';

const getApiUri = () => {
  return awsConfig.aws_appsync_graphqlEndpoint;
};

const httpLink = createHttpLink({
  uri: getApiUri()
});

const authLink = setContext((_, { headers }) => {
  const authHeaders = { 'x-api-key': awsConfig.aws_appsync_apiKey };
  
  return {
    headers: {
      ...headers,
      ...authHeaders
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;