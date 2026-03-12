import React from 'react';
// Importamos tudo como 'LucideIcons' para ter o dicionário completo
import * as LucideIcons from 'lucide-react-native'; 

interface IconProps {
  // O 'keyof' vai extrair o nome de todos os ícones disponíveis (ex: 'User', 'Home')
  name: keyof typeof LucideIcons; 
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color = '#000' }: IconProps) => {
  // Buscamos o componente dentro do objeto exportado
  const LucideIcon = LucideIcons[name] as React.ElementType;

  // Verificamos se o que encontramos é realmente um componente válido
  if (!LucideIcon || typeof LucideIcon === 'string') {
    // Usamos String(name) para evitar o erro de 'symbol' que você recebeu
    console.warn(`Ícone "${String(name)}" não encontrado ou inválido.`);
    return null;
  }

  return <LucideIcon size={size} color={color} />;
};