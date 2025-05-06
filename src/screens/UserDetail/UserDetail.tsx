import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Wrapper from 'components/Wrapper/Wrapper';
import { RootStackParamList } from '../../navigation/AppNavigator.types';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './UserDetail.styles'
import { useUserDetail } from './UserDetail.hook';
import colors from 'common/colors';

type Props = StackScreenProps<RootStackParamList, 'UserDetail'>;

const UserDetail = ({ route }: Props) => {
  const { userId } = route.params;
  const { loading, error, data } = useUserDetail(userId);
  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator testID="ActivityIndicator" animating={true} size="large" color={colors.royalBlue}/>
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>User not found</Text>
      </View>
    );
  }

  const { name, email, role } = data;
  const letter = name.charAt(0).toUpperCase();

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.backButton}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
          <Text style={styles.title}>User Details</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{letter}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>👤 Name</Text>
            <Text style={styles.value}>{name}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>💼 Role</Text>
            <Text style={styles.value}>{role}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>📧 Email</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

export default UserDetail;

