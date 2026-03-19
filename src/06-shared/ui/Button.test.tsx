import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Shared Layer - Button Component', () => {
  it('should render the title correctly', () => {
    // 1. Renders the button virtually
    const { getByText } = render(
      <Button title="Clique Aqui" onPress={() => {}} />,
    );

    // 2. Checks if the text appeared on the screen
    expect(getByText('Clique Aqui')).toBeTruthy();
  });
});

describe('Interaction', () => {
  it('should trigger the onPress function when clicked', () => {
    // 1. Creates a "spy" function (mock)
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Testar" onPress={mockOnPress} />,
    );

    // 2. Simulates the user's touch on the button
    fireEvent.press(getByText('Testar'));

    // 3. Checks if the function was called exactly 1 time
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});