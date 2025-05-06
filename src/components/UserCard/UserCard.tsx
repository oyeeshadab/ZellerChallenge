import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './UserCard.styles'
import { Props } from './UserCard.types'


export default function UserCard({ data, navigation }: Props) {
  const firstLetter = data?.name.charAt(0).toUpperCase();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      testID="user-card"
      onPress={() => navigation.navigate('UserDetail',
        { userId: data.id })
      }
    >
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>
        <View>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.role}>{data?.role}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

