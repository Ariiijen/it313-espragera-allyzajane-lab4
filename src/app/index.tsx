import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import StudentRoster from "../../StudentRoster";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StudentRoster />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
});
