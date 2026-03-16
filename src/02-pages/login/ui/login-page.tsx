import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LoginForm } from "../../../04-features/auth/ui/login-form";

export const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Sauvvi</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Login</Text>
        </View>

        <LoginForm />

        <Text style={styles.footerText}>
          Não possui uma conta? <Text style={styles.link}>Criar conta.</Text>
        </Text>
        <Text style={[styles.link, { textAlign: "center", marginTop: 10 }]}>
          Esqueci minha senha
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f1f1", justifyContent: "center" },
  header: { alignItems: "center", marginBottom: 40 },
  logoText: { color: "#6d0000", fontSize: 36, fontWeight: "bold" },
  card: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  toggleContainer: {
    alignSelf: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: -40,
  },
  toggleText: { fontSize: 16, fontWeight: "500" },
  footerText: { textAlign: "center", marginTop: 20, color: "#333" },
  link: { color: "#b31919", fontWeight: "bold" },
});
