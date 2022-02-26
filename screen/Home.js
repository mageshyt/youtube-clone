import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Divider } from "react-native-elements";
import { videoData } from "../assets/data/data";

import HeaderTab from "../components/HomeScreen/HeaderTab";

import HomePageScreen from "../components/HomeScreen/HomePageScreen";
import RecommendationTab from "../components/HomeScreen/RecommendationTab";

export default function Home({ navigation }) {
  return (
    <View style={{ backgroundColor: "#121212" }}>
      <SafeAreaView>
        <View style={{ marginTop: Platform.OS === "ios" ? -10 : 20 }}>
          <HeaderTab />
        </View>
      </SafeAreaView>

      <Divider width={0.6} />
      <RecommendationTab />
      <Divider width={0.6} />
      {/* Home Screen */}

      <ScrollView
        contentInset={{ bottom: 90 }}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {videoData.map((item, index) => (
          <View key={index}>
            <HomePageScreen
              navigation={navigation}
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
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 80,
  },
});
