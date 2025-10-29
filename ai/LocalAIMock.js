const MOODS = [
  { id: "happy", label: "Happy", color: "#00d4ff" },
  { id: "calm", label: "Calm", color: "#7ef0d4" },
  { id: "sad", label: "Sad", color: "#7a90ff" },
  { id: "energetic", label: "Energetic", color: "#ffd166" },
  { id: "nostalgic", label: "Nostalgic", color: "#b085ff" },
];

function pickMoodFromText(text = "") {
  const t = text.toLowerCase();
  if (t.includes("love") || t.includes("happy")) return MOODS[0];
  if (t.includes("calm") || t.includes("relax")) return MOODS[1];
  if (t.includes("sad") || t.includes("alone")) return MOODS[2];
  if (t.includes("hype") || t.includes("energy")) return MOODS[3];
  if (t.includes("remember") || t.includes("past")) return MOODS[4];
  return MOODS[text.length % MOODS.length];
}

export async function analyzeVideoMock({ title = "", description = "" } = {}) {
  await new Promise((r) => setTimeout(r, 900));
  const base = title + " " + description;
  const mood = pickMoodFromText(base);
  const caption = `MonaFeels says: "${mood.label} vibes detected — ${base.slice(0, 40)}..."`;
  const mood_vector = {
    happy: Math.random() * 0.4 + (mood.id === "happy" ? 0.6 : 0.1),
    calm: Math.random() * 0.4 + (mood.id === "calm" ? 0.6 : 0.1),
    sad: Math.random() * 0.4 + (mood.id === "sad" ? 0.6 : 0.1),
    energetic: Math.random() * 0.4 + (mood.id === "energetic" ? 0.6 : 0.1),
    nostalgic: Math.random() * 0.4 + (mood.id === "nostalgic" ? 0.6 : 0.1),
  };
  return {
    detected_mood: mood.id,
    detected_mood_label: mood.label,
    mood_color: mood.color,
    caption,
    mood_vector,
  };
}

export default { analyzeVideoMock };
