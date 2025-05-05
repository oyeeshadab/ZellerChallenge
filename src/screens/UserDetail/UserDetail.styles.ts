import { StyleSheet } from 'react-native';
import colors from 'common/colors'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    paddingHorizontal: 10,
    color: colors.black,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginVertical:20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.Lavender,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.royalBlue,
  },
  section: {
    width: '100%',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: colors.brightGray,
    paddingBottom: 8,
  },
  label: {
    fontSize: 14,
    color: colors.taupeGray,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  errorText: {
    fontSize: 16,
    color: colors.black,
  },
  backText: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.black,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
