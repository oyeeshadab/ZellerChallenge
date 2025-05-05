import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ViewStyle,
} from 'react-native';
import colors from 'common/colors';
import { WrapperProps, WithoutTouchableFeedbackProps } from './Wrapper.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wrapper: React.FC<WrapperProps> = ({
  children,
  noPadding = false,
  noHeader = false,
  KeyboardHide = false,
}) => {
  const styles = createStyles(noPadding, noHeader);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      {KeyboardHide ? (
        <WithoutTouchableFeedback>{children}</WithoutTouchableFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1 }}>{children}</View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
};

const WithoutTouchableFeedback: React.FC<WithoutTouchableFeedbackProps> = ({ children }) => (
  <View style={{ flex: 1 }}>{children}</View>
);

const createStyles = (noPadding: boolean, noHeader: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: noPadding ? 0 : 20,
    } as ViewStyle,
  });

export default Wrapper;