import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// MÁGICA 2: O Widget orquestra a Feature e a Entidade!
import { LoginButton } from '@/04-features/auth';
import { UserAvatar } from '@/05-entities/user';

export const HeaderWidget = () => {
  // Num projeto real, isto viria do Zustand ou Contexto
  const [isLogged] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MeuApp</Text>
      
      {/* Se quiser testar o avatar, mude o isLogged para true */}
      {isLogged ? <UserAvatar name="Usuário" /> : <LoginButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F2F2F7',
    borderBottomWidth: 1,
    borderColor: '#E5E5EA',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});