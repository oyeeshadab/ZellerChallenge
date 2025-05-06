import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'apollo/client';
import AppNavigator from 'navigation/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <AppNavigator testID="app-root"/>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;