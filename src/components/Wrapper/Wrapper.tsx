import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ViewStyle,
} from 'react-native';
import colors from 'common/colors';
import { WrapperProps } from './Wrapper.types';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wrapper: React.FC<WrapperProps> = ({
  children,
  noPadding = false,
}) => {
  const styles = createStyles(noPadding);

  return (
    <SafeAreaView testID="safe-area-view" style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.flex1}>{children}</View>
    </SafeAreaView>
  );
};


const createStyles = (noPadding: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: noPadding ? 0 : 20,
    } as ViewStyle,
    flex1: { flex: 1 },
  });

export default Wrapper;