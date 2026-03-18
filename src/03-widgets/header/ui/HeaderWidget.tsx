import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// MAGIC 2: The Widget orchestrates the Feature and the Entity!
import { LoginButton } from '@/04-features/auth';
import { UserAvatar } from '@/05-entities/user';

export const HeaderWidget = () => {
  // In a real project, this state would come from Zustand, Redux, or Context API
  const [isLogged] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      
      {/* If you want to test the avatar, change isLogged to true */}
      {isLogged ? <UserAvatar name="User" /> : <LoginButton />}
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