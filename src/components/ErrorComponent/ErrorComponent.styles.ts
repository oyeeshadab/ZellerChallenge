import { StyleSheet } from 'react-native';
import colors from 'common/colors'
export const styles = StyleSheet.create({
    errorContainer: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.coralRed,
      },
      errorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.coralRed,
      },
      errorTextStyle: {
        fontSize: 14,
        color: colors.darkCharcoal,
        marginTop: 8,
      },
});

export default styles;
