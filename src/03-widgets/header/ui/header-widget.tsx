import React from 'react';
import { View, Text } from 'react-native';
import { useAuthStore } from '../../../04-features/auth/model/use-auth-store';
import { Icon } from '../../../06-shared/lib/icon-adapter';

export const HeaderWidget = () => {
  // O Widget consome o estado da Feature de Auth
  const { user } = useAuthStore(); 

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#f5f5f5' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Olá, {user ? user.name : 'Visitante'}
      </Text>
      <Icon name="Bell" color="red" size={24} />
    </View>
  );
};