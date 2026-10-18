import { StyleSheet, Text, View } from "react-native";

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>{course}</Text>
      <Text style={styles.detail}>{units} units</Text>
      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    color: "#666",
    fontSize: 14,
  },
  fullLoad: {
    color: "green",
    fontWeight: "bold",
  },
});
