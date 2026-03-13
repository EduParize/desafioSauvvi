import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { HomeHeaderWidget } from "../../../03-widgets/header/ui/home-header-widget";
import { BottomNavWidget } from "../../../03-widgets/bottom-nav/ui/bottom-nav-widget";
import { AccountValidationAlert } from "../../../04-features/account-validation/ui/validation-alert";
import { SearchBar } from "../../../04-features/search/ui/search-bar";

import { HospitalCard } from "../../../05-entities/hospital/ui/hospital-card";

import { CategoryPill } from "../../../06-shared/ui/category-pill";

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <HomeHeaderWidget />

      <ScrollView style={styles.scrollContent}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          <CategoryPill title="Centros Médicos" active />
          <CategoryPill title="Profissionais" />
        </ScrollView>

        <AccountValidationAlert />

        <SearchBar />

        <HospitalCard
          nome="Centro Hospitalar São Camilo"
          especialidades="Anestesiologia, Cardiologia..."
          distancia="2.76 km"
        />
        <HospitalCard
          nome="Instituto de Medicina"
          especialidades="Oftalmologia, Cirurgia geral..."
          distancia="1.39 km"
        />
      </ScrollView>

      <BottomNavWidget />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f6f9" },
  scrollContent: { paddingHorizontal: 15, paddingBottom: 20 },
  categories: { flexDirection: "row", marginTop: 20, marginBottom: 20 },
});
