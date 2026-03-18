import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { LoginButton } from './LoginButton';

// Dizemos ao Jest para "espiar" tudo o que acontece com o Alert do React Native
jest.spyOn(Alert, 'alert');

describe('Auth Feature - LoginButton', () => {
  it('deve renderizar corretamente com o texto "Login"', () => {
    // Renderiza a feature
    const { getByText } = render(<LoginButton />);
    
    // Verifica se ela montou a interface com o texto esperado (agora em inglês!)
    expect(getByText('Login')).toBeTruthy();
  });

  it('deve disparar a regra de negócio (Alert) ao fazer login', () => {
    const { getByText } = render(<LoginButton />);
    
    // Simula o clique do utilizador no botão "Login"
    fireEvent.press(getByText('Login'));
    
    // Verifica se a feature chamou o Alert EXATAMENTE com os textos em inglês
    expect(Alert.alert).toHaveBeenCalledWith(
      'Success', 
      'Login performed by the Feature!'
    );
  });
});