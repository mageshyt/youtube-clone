import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <Home />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
