import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderNav from "./components/HeaderNav";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <HeaderNav />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#121212",
  // },
});
