import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function VideoCard({ item = {}, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress && onPress(item)}>
      <View style={styles.thumbPlaceholder}>
        <Text style={styles.thumbText}>VIDEO</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.title}>{item.title || "Untitled clip"}</Text>
        <Text style={styles.mood} numberOfLines={1}>{item.detected_mood_label || "Unk"}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", padding: 12, alignItems: "center", borderBottomWidth: 0.5, borderColor: "#081220" },
  thumbPlaceholder: { width: 110, height: 70, backgroundColor: "#020814", justifyContent: "center", alignItems: "center", borderRadius: 8 },
  thumbText: { color: "#00d4ff", fontWeight: "700" },
  meta: { marginLeft: 12, flex: 1 },
  title: { color: "white", fontSize: 16, fontWeight: "600" },
  mood: { color: "#9fbfdc", marginTop: 6 },
});
