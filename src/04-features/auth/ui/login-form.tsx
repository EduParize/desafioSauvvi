import React from "react";
import { View, Button, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../model/use-auth-store";

export const LoginForm = () => {
  const { login, isLoading } = useAuthStore();
  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    await login({});
    navigation.replace("Home");
  };

  return (
    <View style={{ marginTop: 20 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#9b1b1b" />
      ) : (
        <Button
          title="Entrar no Sistema"
          color="#9b1b1b"
          onPress={handleLogin}
        />
      )}
    </View>
  );
};
