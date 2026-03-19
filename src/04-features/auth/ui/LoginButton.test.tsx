import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { LoginButton } from './LoginButton';

// 1. Importamos a nossa requisição isolada da camada de API
import { loginRequest } from '../api/loginRequest';

// 2. MÁGICA: Pedimos ao Jest para intercetar este ficheiro e NÃO fazer chamadas reais para a internet!
jest.mock('../api/loginRequest');

// Dizemos ao Jest para "espiar" tudo o que acontece com o Alert do React Native
jest.spyOn(Alert, 'alert');

describe('Auth Feature - LoginButton', () => {
  beforeEach(() => {
    // Limpa a memória dos nossos espiões antes de cada teste
    jest.clearAllMocks();
  });

  it('deve renderizar corretamente com o texto "Login"', () => {
    const { getByText } = render(<LoginButton />);
    expect(getByText('Login')).toBeTruthy();
  });
});

describe('When the user presses the login button', () => {
  it('deve mostrar mensagem de sucesso quando a API responder OK', async () => {
    // 3. Configuramos o mock para simular que o servidor respondeu com sucesso!
    (loginRequest as jest.Mock).mockResolvedValueOnce({
      token: 'fake-jwt-token',
    });

    const { getByText } = render(<LoginButton />);

    // Simula o clique
    fireEvent.press(getByText('Login'));

    // 4. Como a função é async, o teste agora tem de ESPERAR (waitFor) pelo Alert
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Success',
        'Login performed successfully via API!',
      );
    });
  });
});

describe('When the user presses the login button and the API fails', () => {
  it('deve mostrar mensagem de erro quando a API falhar', async () => {
    // 5. Configuramos o mock para simular que a internet caiu ou o servidor deu erro 500
    (loginRequest as jest.Mock).mockRejectedValueOnce(
      new Error('Network Error'),
    );

    const { getByText } = render(<LoginButton />);

    fireEvent.press(getByText('Login'));

    // Esperamos o catch() do componente ser ativado
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Error',
        'Failed to connect to the server.',
      );
    });
  });
});
