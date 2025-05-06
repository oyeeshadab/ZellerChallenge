import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ApolloError } from '@apollo/client';
import UserList from './UserList';
import { useUserList } from './UserList.hook';
import { ZellerCustomer, Role } from 'types/graphql';
import { NavigationContainer } from '@react-navigation/native';


jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
  NavigationContainer: ({ children }: any) => children,
}));


jest.mock('./UserList.hook');

// Mock components with proper React Native elements
jest.mock('components/RadioSelector/RadioSelector', () => {
  const React = require('react');
  const { View, Text, TouchableOpacity } = require('react-native');
  return ({ selected, onSelect }: any) => (
    <TouchableOpacity 
      testID="radio-selector"
      onPress={() => onSelect('ADMIN')}
      style={{ padding: 10 }}
    >
      <Text>{selected}</Text>
    </TouchableOpacity>
  );
});

jest.mock('components/UserCard/UserCard', () => {
  const React = require('react');
  const { View, Text } = require('react-native');
  return ({ data }: any) => (
    <View testID="user-card" style={{ padding: 10 }}>
      <Text>{data.name}</Text>
    </View>
  );
});

jest.mock('components/ErrorComponent/ErrorComponent', () => {
  const { View, Text } = require('react-native');
  return () => (
    <View testID="error-component">
      <Text>Error Message</Text>
    </View>
  );
});

jest.mock('components/ItemSeparator/ItemSeparator', () => {
  const { View } = require('react-native');
  return () => <View testID="item-separator" style={{ height: 1 }} />;
});
describe('UserList Component', () => {
  const mockUseUserList = useUserList as jest.MockedFunction<typeof useUserList>;
  const mockNavigation = { navigate: jest.fn() };

  const mockCustomer: ZellerCustomer = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'ADMIN'
  };

  const mockError = new ApolloError({
    errorMessage: 'Test error',
    graphQLErrors: [],
    networkError: null
  });

  const defaultHookValues = {
    loading: false,
    error: undefined,
    filtered: [mockCustomer],
    selectedRole: 'ADMIN' as Role,
    setSelectedRole: jest.fn(),
    refreshing: false,
    onRefresh: jest.fn()
  };

  beforeEach(() => {
    mockUseUserList.mockReturnValue(defaultHookValues);
  });

  it('renders correctly', () => {
    const { getByText } = render(<UserList navigation={mockNavigation} />);
    expect(getByText('ADMIN Users')).toBeTruthy();
  });

  const renderComponent = () =>
    render(
      <NavigationContainer>
        <UserList navigation={mockNavigation as any} />
      </NavigationContainer>
    );
});