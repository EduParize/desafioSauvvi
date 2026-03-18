import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderWidget } from '@/03-widgets/header';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* A página não sabe como o login funciona, ela apenas chama o Header */}
      <HeaderWidget />
      
      <View style={styles.content}>
        <Text>Bem-vindo à arquitetura FSD!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});