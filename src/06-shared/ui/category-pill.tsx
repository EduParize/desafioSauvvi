import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const CategoryPill = ({ title, active = false }: { title: string, active?: boolean }) => (
  <TouchableOpacity style={[styles.pill, active && styles.activePill]}>
    <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pill: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', marginRight: 10 },
  activePill: { borderColor: '#b31919' },
  text: { color: '#666', fontWeight: 'bold' },
  activeText: { color: '#b31919' }
});