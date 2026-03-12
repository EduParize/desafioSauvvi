import React from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../model/use-auth-store';
import { Icon } from '../../../shared/lib/icon-adapter'; // Usando o Adapter!

export const LoginForm = () => {
  const { login, isLoading } = useAuthStore();

  return (
    <View>
      <Icon name="User" color="blue" />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Entrar no Sistema" onPress={() => login({})} />
      )}
    </View>
  );
};