import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  createHttpLink: jest.fn(),
  InMemoryCache: jest.fn(),
  ApolloClient: jest.fn().mockImplementation(() => ({
    query: jest.fn(),
    clearStore: jest.fn(),
  })),
}));