import React from "react";

import * as LucideIcons from "lucide-react-native";

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color = "#000" }: IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ElementType;

  if (!LucideIcon || typeof LucideIcon === "string") {
    console.warn(`Ícone "${String(name)}" não encontrado ou inválido.`);
    return null;
  }

  return <LucideIcon size={size} color={color} />;
};
