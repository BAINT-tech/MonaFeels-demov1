import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Library</Text>
      <View style={styles.box}>
        <Text style={{ color: "#cfeaf8" }}>Saved creations will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#041026", padding: 18 },
  header: { color: "#00d4ff", fontSize: 20, fontWeight: "800", marginBottom: 12 },
  box: { backgroundColor: "#02102a", padding: 16, borderRadius: 8 },
});
