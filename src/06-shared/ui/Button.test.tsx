import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Shared Layer - Button Component', () => {
  it('deve renderizar o título corretamente', () => {
    // 1. Renderiza o botão virtualmente
    const { getByText } = render(
      <Button title="Clique Aqui" onPress={() => {}} />,
    );

    // 2. Verifica se o texto apareceu no ecrã
    expect(getByText('Clique Aqui')).toBeTruthy();
  });
});

describe('Interação', () => {
  it('deve disparar a função onPress quando for clicado', () => {
    // 1. Cria uma função "espiã" (mock)
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Testar" onPress={mockOnPress} />,
    );

    // 2. Simula o toque do utilizador no botão
    fireEvent.press(getByText('Testar'));

    // 3. Verifica se a função foi chamada exatamente 1 vez
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
