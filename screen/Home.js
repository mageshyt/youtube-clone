import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTab from "../components/HomeScreen/HeaderTab";
import VideoScreen from "../components/HomeScreen/VideoScreen";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <SafeAreaView>
        <HeaderTab />
      </SafeAreaView>
      <VideoScreen />
    </View>
  );
}
