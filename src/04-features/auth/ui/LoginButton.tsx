import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '@/06-shared/ui/Button';
//import { HeaderWidget } from '@/03-widgets/header';

// 1. We import our isolated request from the API layer of this same Feature
import { loginRequest } from '../api/loginRequest';

export const LoginButton = () => {
  // 2. We create a state to control if the request is happening
  const [isLoading, setIsLoading] = useState(false);

  // 3. We transform the function into an asynchronous one
  const handleLogin = async () => {
    try {
      setIsLoading(true); // Blocks the button and shows "Loading..."

      // In a real project, this email would come from a TextInput on the screen
      const userEmail = 'teste@sauvvitech.com';

      // 4. We trigger the actual call to the server
      const response = await loginRequest(userEmail);

      // 5. If the server responds with 200 OK, we show the success message
      Alert.alert('Success', 'Login performed successfully via API!');
      console.log('Server data:', response);
    } catch (error) {
      // 6. If the server goes down or gives a 401 error, the catch block handles it
      Alert.alert('Error', 'Failed to connect to the server.');
      console.error(error);
    } finally {
      setIsLoading(false); // Releases the button regardless of the result
    }
  };

  return (
    <Button title={isLoading ? 'Loading...' : 'Login'} onPress={handleLogin} />
  );
};