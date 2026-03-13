import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from '../../../06-shared/lib/icon-adapter';

export const SearchBar = () => (
  <View style={styles.container}>
    <Icon name="Search" color="#b31919" size={20} />
    <TextInput placeholder="Faça sua busca" style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  input: { marginLeft: 10, flex: 1, color: '#333' }
});