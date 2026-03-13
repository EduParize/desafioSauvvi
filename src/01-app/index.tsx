import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginPage } from "../02-pages/login/ui/login-page";
import { HomePage } from "../02-pages/home/ui/home-page";

const Stack = createNativeStackNavigator();

export const AppEntry = () => {
  useEffect(() => {
    console.log("[EAS Update] Verificando novas versões...");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
