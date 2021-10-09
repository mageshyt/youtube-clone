import React from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import videoData from "../assets/data/data";

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
      <ScrollView>
        {videoData.map((item, index) => (
          <View key={index}>
            <VideoScreen
              title={item.title}
              image={item.image}
              views={item.views}
              uploadedTime={item.uploadedTime}
              logo={item.logo}
              channelName={item.name}
            />
          </View>
        ))}
      </ScrollView>
      {/* <VideoPlayScreen
        title={videoData[0].title}
        views={videoData[0].views}
        uploadedTime={videoData[0].uploadedTime}
      /> */}
    </View>
  );
}
