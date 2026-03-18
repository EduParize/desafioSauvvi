import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const UserAvatar = ({ name }: { name: string }) => (
  <View style={styles.circle}>
    <Text style={styles.initial}>{name.charAt(0).toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#34C759',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});