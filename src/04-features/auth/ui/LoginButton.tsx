import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '@/06-shared/ui/Button';

// 1. Importamos a nossa requisição isolada da camada de API desta mesma Feature
import { loginRequest } from '../api/loginRequest';

export const LoginButton = () => {
  // 2. Criamos um estado para controlar se a requisição está a acontecer
  const [isLoading, setIsLoading] = useState(false);

  // 3. Transformamos a função em assíncrona
  const handleLogin = async () => {
    try {
      setIsLoading(true); // Bloqueia o botão e mostra "Loading..."

      // Num projeto real, este email viria de um TextInput no ecrã
      const userEmail = 'teste@sauvvitech.com';

      // 4. Disparamos a chamada real para o servidor
      const response = await loginRequest(userEmail);

      // 5. Se o servidor responder 200 OK, mostramos a mensagem de sucesso
      Alert.alert('Success', 'Login performed successfully via API!');
      console.log('Dados do servidor:', response);
    } catch (error) {
      // 6. Se o servidor cair ou der erro 401, o catch apanha
      Alert.alert('Error', 'Failed to connect to the server.');
      console.error(error);
    } finally {
      setIsLoading(false); // Liberta o botão independentemente do resultado
    }
  };

  return (
    <Button title={isLoading ? 'Loading...' : 'Login'} onPress={handleLogin} />
  );
};
