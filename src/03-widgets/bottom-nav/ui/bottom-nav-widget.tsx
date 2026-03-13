import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../../../06-shared/lib/icon-adapter';

export const BottomNavWidget = () => (
  <View style={styles.nav}>
    <View style={styles.item}><Icon name="Home" color="#b31919" /><Text style={[styles.text, {color: '#b31919'}]}>Início</Text></View>
    <View style={styles.item}><Icon name="DollarSign" color="#999" /><Text style={styles.text}>Pagamentos</Text></View>
    <View style={styles.item}><Icon name="Users" color="#999" /><Text style={styles.text}>Dependentes</Text></View>
    <View style={styles.item}><Icon name="Calendar" color="#999" /><Text style={styles.text}>Agendamentos</Text></View>
  </View>
);

const styles = StyleSheet.create({
  nav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', paddingVertical: 15, borderTopWidth: 1, borderColor: '#eee' },
  item: { alignItems: 'center' },
  text: { fontSize: 12, marginTop: 5, color: '#999' }
});