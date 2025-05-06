import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserCard from './UserCard';

const mockUser = {
  id: 123,
  name: 'John Doe',
  role: 'Admin',
  email: 'john@example.com',
};

const mockNavigation = {
  navigate: jest.fn(),
};

describe('UserCard', () => {
  it('renders user info', () => {
    const { getByText } = render(
      <UserCard data={mockUser} navigation={mockNavigation as any} />
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Admin')).toBeTruthy();
  });

  it('navigates on press', () => {
    const { getByTestId } = render(
      <UserCard data={mockUser} navigation={mockNavigation as any} />
    );

    fireEvent.press(getByTestId('user-card'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('UserDetail', {
      userId: 123,
    });
  });
});
