import React from 'react';
import { View, Text } from 'react-native';
import { ErrorComponentProps } from './ErrorComponent.types';
import styles from './ErrorComponent.styles';

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => (
  <View style={styles.errorContainer} testID='error-container-test-id'>
    <Text style={[styles.errorTitle, styles.errorTextStyle]}>
      Failed to load users
    </Text>
    <Text style={styles.errorTextStyle} testID='error-text-test-id'>
      {error?.message || 'Something went wrong. Please try again later.'}
    </Text>
  </View>
);

export default ErrorComponent;
