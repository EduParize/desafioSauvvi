import React from 'react';
import { Alert } from 'react-native';
// MÁGICA 1: O Alias (@/) e as regras do FSD a funcionar!
import { Button } from '@/06-shared/ui/Button';

export const LoginButton = () => {
  const handleLogin = () => {
    Alert.alert('Sucesso', 'Login realizado pela Feature!');
  };

  return <Button title="Entrar" onPress={handleLogin} />;
};