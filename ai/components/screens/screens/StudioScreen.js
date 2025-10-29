import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import LocalAIMock from "../ai/LocalAIMock";

export default function StudioScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [processing, setProcessing] = useState(false);
  const [lastResult, setLastResult] = useState(null);

  async function handleGenerate() {
    setProcessing(true);
    try {
      const res = await LocalAIMock.analyzeVideoMock({ title, description: desc });
      setLastResult(res);
    } catch (e) {
      Alert.alert("Error", "AI mock failed");
    } finally {
      setProcessing(false);
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Studio • Create</Text>
      <TextInput
        placeholder="Title (try: 'love', 'calm', 'hype')"
        placeholderTextColor="#6b7a86"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Short description"
        placeholderTextColor="#6b7a86"
        value={desc}
        onChangeText={setDesc}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={handleGenerate}>
        <Text style={{ color: "#001219", fontWeight: "700" }}>
          {processing ? "Processing..." : "Analyze (Mock AI)"}
        </Text>
      </TouchableOpacity>

      {lastResult ? (
        <View style={styles.result}>
          <Text style={{ color: lastResult.mood_color || "#fff", fontWeight: "800" }}>{lastResult.detected_mood_label}</Text>
          <Text style={{ color: "#cfeaf8", marginTop: 6 }}>{lastResult.caption}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#041026", padding: 18 },
  header: { color: "#00d4ff", fontSize: 20, fontWeight: "800", marginBottom: 12 },
  input: { backgroundColor: "#022033", color: "white", padding: 12, borderRadius: 8, marginBottom: 12 },
  btn: { backgroundColor: "#00d4ff", padding: 12, alignItems: "center", borderRadius: 8 },
  result: { marginTop: 20, padding: 12, backgroundColor: "#02102a", borderRadius: 8 },
});
