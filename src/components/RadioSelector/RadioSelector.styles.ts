import { StyleSheet } from 'react-native';

import colors from 'common/colors';

export const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  title: { fontWeight: '600', fontSize: 18, marginBottom: 8 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  selected: {
    backgroundColor: colors.aliceBlue,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.trueBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.trueBlue,
  },
  optionText: {
    fontSize: 16,
  },
});

export default styles;
