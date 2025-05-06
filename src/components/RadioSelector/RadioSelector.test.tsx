import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioSelector from './RadioSelector';

describe('RadioSelector', () => {
  it('renders with ADMIN selected by default', () => {
    const { getByText } = render(
      <RadioSelector selected="ADMIN" onSelect={jest.fn()} />
    );

    expect(getByText('ADMIN')).toHaveTextContent('ADMIN');
    expect(getByText('MANAGER')).toHaveTextContent('MANAGER');
  });

  it('calls onSelect with "MANAGER" when MANAGER is tapped', () => {
    const mockSelect = jest.fn();

    const { getByText } = render(
      <RadioSelector selected="ADMIN" onSelect={mockSelect} />
    );

    fireEvent.press(getByText('MANAGER'));

    expect(mockSelect).toHaveBeenCalledWith('MANAGER');
  });
});
