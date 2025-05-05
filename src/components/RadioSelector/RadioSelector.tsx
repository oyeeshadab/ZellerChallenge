import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './RadioSelector.styles';
import { Role, Props } from './RadioSelector.types';

const roles: Role[] = ['ADMIN', 'MANAGER'];

export default function RadioSelector({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Types</Text>
      {roles.map(role => (
        <TouchableOpacity
          key={role}
          style={[styles.option, selected === role && styles.selected]}
          onPress={() => onSelect(role)}
        >
          <View style={styles.radioCircle}>
            {selected === role && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.optionText}>{role}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
