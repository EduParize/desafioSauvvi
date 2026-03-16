import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const AccountValidationAlert = () => (
  <View style={styles.card}>
    <Text style={styles.title}>Valide sua conta!</Text>
    <Text style={styles.text}>Para conseguir agendar atendimentos é preciso validar sua conta!</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>validar conta</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff5f0', padding: 20, borderRadius: 10, borderColor: '#ffb38a', borderWidth: 1, marginBottom: 20 },
  title: { color: '#cc5500', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  text: { color: '#666', marginBottom: 15 },
  button: { backgroundColor: '#d97b48', padding: 10, borderRadius: 5, alignSelf: 'flex-end' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});