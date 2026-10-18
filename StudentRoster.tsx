import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import StudentCard from "./StudentCard";

type Student = {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

const students: Student[] = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  const [reversed, setReversed] = useState(false);
  const displayedStudents = reversed ? [...students].reverse() : students;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{students.length} students</Text>
      <Button title="Reverse Order" onPress={() => setReversed(!reversed)} />
      {displayedStudents.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
