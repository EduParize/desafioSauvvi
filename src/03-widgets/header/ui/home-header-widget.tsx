import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../../../06-shared/lib/icon-adapter";
import { useAuthStore } from "../../../04-features/auth/model/use-auth-store";

export const HomeHeaderWidget = () => {
  const { user } = useAuthStore();
  const navigation = useNavigation<any>();

  const handleVoltar = () => {
    navigation.replace("Login");
  };

  return (
    <View style={styles.header}>
      <View style={styles.topRow}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={handleVoltar} style={styles.backButton}>
            <Icon name="ArrowLeft" color="white" size={24} />
          </TouchableOpacity>
          <Text style={styles.logoText}>Sauvvitech</Text>
        </View>

        <View style={styles.icons}>
          <View style={styles.iconCircle}>
            <Icon name="Phone" color="#b31919" size={20} />
          </View>
          <View style={styles.iconCircle}>
            <Icon name="User" color="#666" size={20} />
          </View>
        </View>
      </View>
      <Text style={styles.welcomeText}>
        Seja bem vindo(a), {user ? user.name : "Visitante"}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9b1b1b",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  backButton: { marginRight: 15 },
  logoText: { color: "white", fontSize: 24, fontWeight: "bold" },
  icons: { flexDirection: "row", gap: 10 },
  iconCircle: { backgroundColor: "white", padding: 10, borderRadius: 20 },
  welcomeText: { color: "white", marginTop: 20, fontSize: 16 },
});
