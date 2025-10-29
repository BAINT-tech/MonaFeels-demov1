import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.card}>
        <Text style={{ color: "#cfeaf8", fontWeight: "700" }}>AI Mirror (mock)</Text>
        <Text style={{ color: "#9fbfdc", marginTop: 8 }}>Mood timeline & analytics will be here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#041026", padding: 18 },
  header: { color: "#00d4ff", fontSize: 20, fontWeight: "800", marginBottom: 12 },
  card: { backgroundColor: "#02102a", padding: 16, borderRadius: 8 },
});
