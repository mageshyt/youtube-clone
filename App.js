import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation";
import Home from "./screen/Home";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      {/* <Home /> */}
      <RootNavigation />
    </View>
  );
}

const API_KEY = "AIzaSyCy0mvusZl2MVhyNOsaVGyQ75Eg1ajqecA";
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export const youtubeData = async () => {
  const searchResults = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}}?part=snippet&playlistId=PL-J2q3Ga50oNQP__onO64kAHX_z0BdLv6&key=${API_KEY}`
  ).then((response) => response.json());

  return searchResults;
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
