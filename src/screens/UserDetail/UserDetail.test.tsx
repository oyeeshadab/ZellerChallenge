import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserDetail from './UserDetail';
import { useUserDetail } from './UserDetail.hook';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// Mock the hook
jest.mock('./UserDetail.hook');

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
    NavigationContainer: ({ children }: any) => children,
  }));

const mockedUseUserDetail = useUserDetail as jest.MockedFunction<typeof useUserDetail>;

const mockNavigation = {
  goBack: jest.fn(),
};

const mockRoute = {
  params: {
    userId: '1',
  },
};

const renderComponent = () =>
  render(
    <NavigationContainer>
      <UserDetail navigation={mockNavigation as any} route={mockRoute as any} />
    </NavigationContainer>
  );

describe('UserDetail', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });


  it('renders error message when error exists', () => {
    mockedUseUserDetail.mockReturnValue({
      loading: false,
      error: undefined,
      data: null,
    });

    const { getByText } = renderComponent();
    expect(getByText('User not found')).toBeTruthy();
  });

  it('renders user details correctly', () => {
    mockedUseUserDetail.mockReturnValue({
      loading: false,
      error: undefined,
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
      },
    });

    const { getByText } = renderComponent();
    expect(getByText('User Details')).toBeTruthy();
    expect(getByText('👤 Name')).toBeTruthy();
    expect(getByText('💼 Role')).toBeTruthy();
    expect(getByText('📧 Email')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('john@example.com')).toBeTruthy();
    expect(getByText('Admin')).toBeTruthy();
  });

});
