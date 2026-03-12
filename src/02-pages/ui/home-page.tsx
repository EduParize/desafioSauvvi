import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { HeaderWidget } from '../../../03-widgets/header/ui/header-widget';
import { LoginForm } from '../../../04-features/auth/ui/login-form';

export const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* 1. O cabeçalho no topo */}
      <HeaderWidget />
      
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text style={{ fontSize: 22, textAlign: 'center', marginBottom: 40 }}>
          Portal SauvviTech
        </Text>
        
        {/* 2. O formulário de login no centro */}
        <LoginForm />
      </View>
    </SafeAreaView>
  );
};