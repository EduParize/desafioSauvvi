import React from 'react';
import { Alert } from 'react-native';
//import { HeaderWidget } from '@/03-widgets/header';

// MAGIC 1: The Alias (@/) and FSD rules at work!
import { Button } from '@/06-shared/ui/Button';

export const LoginButton = () => {
  //HeaderWidget(); //Showing that we cant use widgets in features, but we can use shared components
  const handleLogin = () => {
    Alert.alert('Success', 'Login performed by the Feature!');
  };

  return <Button title="Login" onPress={handleLogin} />;
};