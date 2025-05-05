import { StyleSheet } from 'react-native';

import colors from 'common/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 12,
    color: colors.black,
  },
  separator: {
    height: 1,
    backgroundColor: colors.brightGray,
  },
  loader: {
    backgroundColor: colors.white
  },
  listContainer: {
    padding: 16,
  },
  errorText: {
    color: colors.red,
    fontWeight: '600',
    fontSize: 18,
  },
  errorContainer: {
    backgroundColor: colors.lavenderBlush,
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  emptyComponentContainer: { alignItems: 'center', marginTop: 40 },
  noUserText: { color: colors.taupeGray },
  errorTitle: { fontWeight: '600', marginBottom: 4 },
  errorTextStyle: { color: colors.carnelian },
});

export default styles;
