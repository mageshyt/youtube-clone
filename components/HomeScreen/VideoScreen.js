import React from "react";
import { View, Text } from "react-native";

import tw from "tailwind-react-native-classnames";
function VideoScreen() {
  return (
    <View style={styles.container}>
      <Text style={tw`text-3xl text-gray-900`}>hi</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
});
export default VideoScreen;
