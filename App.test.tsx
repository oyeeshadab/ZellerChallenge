import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from './App';

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
    NavigationContainer: ({ children }: any) => children,
  }));

describe('App Component', () => {
  beforeAll(() => {
    jest.mock('apollo/client', () => ({
      __esModule: true,
      default: {
        query: jest.fn(),
      },
    }));
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-root')).toBeTruthy();
  });
});