import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Importing from the Widget's front door!
import { HeaderWidget } from '@/03-widgets/header';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* The page doesn't know how login works, it just calls the Header */}
      <HeaderWidget />
      
      <View style={styles.content}>
        <Text>Welcome to the FSD architecture!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});