import { StyleSheet } from 'react-native';

import colors from 'common/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: colors.aliceBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.trueBlue,
    fontWeight: '600',
    fontSize: 16,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
  },
  role: {
    color: colors.taupeGray,
  },
});

export default styles;
