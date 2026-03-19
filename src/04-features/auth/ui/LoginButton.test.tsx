import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { LoginButton } from './LoginButton';

// 1. We import our isolated request from the API layer
import { loginRequest } from '../api/loginRequest';

// 2. MAGIC: We ask Jest to intercept this file and NOT make real internet calls!
jest.mock('../api/loginRequest');

// We tell Jest to "spy" on everything that happens with the React Native Alert
jest.spyOn(Alert, 'alert');

describe('Auth Feature - LoginButton', () => {
  beforeEach(() => {
    // Clears the memory of our spies before each test
    jest.clearAllMocks();
  });

  it('should render correctly with the text "Login"', () => {
    const { getByText } = render(<LoginButton />);
    expect(getByText('Login')).toBeTruthy();
  });
});

describe('When the user presses the login button', () => {
  it('should show success message when API responds OK', async () => {
    // 3. We configure the mock to simulate that the server responded successfully!
    (loginRequest as jest.Mock).mockResolvedValueOnce({
      token: 'fake-jwt-token',
    });

    const { getByText } = render(<LoginButton />);

    // Simulates the click
    fireEvent.press(getByText('Login'));

    // 4. Since the function is async, the test now has to WAIT (waitFor) for the Alert
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Success',
        'Login performed successfully via API!',
      );
    });
  });
});

describe('When the user presses the login button and the API fails', () => {
  it('should show error message when API fails', async () => {
    // 5. We configure the mock to simulate that the internet went down or the server gave a 500 error
    (loginRequest as jest.Mock).mockRejectedValueOnce(
      new Error('Network Error'),
    );

    const { getByText } = render(<LoginButton />);

    fireEvent.press(getByText('Login'));

    // We wait for the component's catch() to be triggered
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Error',
        'Failed to connect to the server.',
      );
    });
  });
});