import React, { useState } from "react";
import { View, Text, SafeAreaView, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [localMode, setLocalMode] = useState(true);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.row}>
        <Text style={{ color: "white" }}>Local AI Mode</Text>
        <Switch value={localMode} onValueChange={setLocalMode} thumbColor="#00d4ff" />
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ color: "#9fbfdc" }}>
          When Local AI Mode is active the app uses mock AI responses — no keys required.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#041026", padding: 18 },
  header: { color: "#00d4ff", fontSize: 20, fontWeight: "800", marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12, borderBottomWidth: 0.5, borderColor: "#061022" },
});
