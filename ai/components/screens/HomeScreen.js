import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import VideoCard from "../components/VideoCard";

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([
    { id: "1", title: "Morning vibe", detected_mood_label: "Calm" },
    { id: "2", title: "Street clip", detected_mood_label: "Energetic" },
    { id: "3", title: "Old memories", detected_mood_label: "Nostalgic" },
  ]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.logo}>MONA/FEELS</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <VideoCard item={item} onPress={() => {}} />}
        contentContainerStyle={{ paddingBottom: 140 }}
      />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("Studio")}>
        <Text style={{ color: "#02060a", fontWeight: "700" }}>Create</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#041026" },
  header: { padding: 18 },
  logo: { color: "#00d4ff", fontSize: 24, fontWeight: "800" },
  fab: { position: "absolute", right: 18, bottom: 26, backgroundColor: "#00d4ff", padding: 14, borderRadius: 28, elevation: 6 },
});
