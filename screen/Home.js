import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import { Divider } from "react-native-elements";

import HeaderTab from "../components/HomeScreen/HeaderTab";
import VideoPlayScreen from "../components/HomeScreen/VideoPlayScreen";
import VideoScreen from "../components/HomeScreen/VideoScreen";

export default function Home() {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <SafeAreaView>
        <View style={{ marginTop: Platform.OS === "ios" ? -10 : 20 }}>
          <HeaderTab />
        </View>
      </SafeAreaView>
      <Divider width={0.6} />
      <VideoScreen />
      {/* <VideoPlayScreen /> */}
    </View>
  );
}
