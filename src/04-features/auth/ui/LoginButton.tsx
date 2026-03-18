import React from 'react';
import { Alert } from 'react-native';

// MAGIC 1: The Alias (@/) and FSD rules at work!
import { Button } from '@/06-shared/ui/Button';

export const LoginButton = () => {
  const handleLogin = () => {
    Alert.alert('Success', 'Login performed by the Feature!');
  };

  return <Button title="Login" onPress={handleLogin} />;
};