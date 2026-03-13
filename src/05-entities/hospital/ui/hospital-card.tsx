import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../../../06-shared/lib/icon-adapter';

interface Props { nome: string; especialidades: string; distancia: string; }

export const HospitalCard = ({ nome, especialidades, distancia }: Props) => (
  <View style={styles.card}>
    <View style={styles.iconPlaceholder}><Icon name="Building" color="#9b1b1b" size={30} /></View>
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.text}>{especialidades}</Text>
      <Text style={styles.text}>{distancia}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, elevation: 2 },
  iconPlaceholder: { width: 60, height: 60, backgroundColor: '#f0f0f0', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  info: { flex: 1 },
  nome: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  text: { color: '#666', fontSize: 13, marginBottom: 2 }
});