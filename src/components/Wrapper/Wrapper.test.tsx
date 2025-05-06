import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Wrapper>
        <Text>Hello, world!</Text>
      </Wrapper>
    );

    expect(getByText('Hello, world!')).toBeTruthy();
  });

  it('applies default padding (20)', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Text>Padding Test</Text>
      </Wrapper>
    );

    const container = getByTestId('safe-area-view');
    expect(container.props.style.paddingHorizontal).toBe(20);
  });

  it('removes padding when noPadding is true', () => {
    const { getByTestId } = render(
      <Wrapper noPadding>
        <Text>No Padding</Text>
      </Wrapper>
    );

    const container = getByTestId('safe-area-view');
    expect(container.props.style.paddingHorizontal).toBe(0);
  });

  it('has white background and flex: 1', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Text>Style Test</Text>
      </Wrapper>
    );

    const container = getByTestId('safe-area-view');
    expect(container.props.style.backgroundColor).toBe('#fff'); // Assuming `colors.white` = '#FFFFFF'
    expect(container.props.style.flex).toBe(1);
  });
});
