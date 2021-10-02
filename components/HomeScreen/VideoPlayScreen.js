import React from "react";
import { View, Text, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
const VideoPlayScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={video}
        style={{ width: "100%", height: 200 }}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayScreen;
