import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

import tw from "tailwind-react-native-classnames";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from "@expo/vector-icons";
const VideoPlayScreen = ({ title, views, uploadedTime }) => {
  const video = React.useRef(null);

  const [status, setStatus] = React.useState({});

  const [like, setLike] = React.useState("1");

  // ! icons name
  const iconsName = [
    { name: "like1", text: "9.8k" },
    { name: "dislike2", text: "20" },
    { name: "download", text: "download" },
    { name: "sharealt", text: "share" },
    { name: "addfile", text: "save" },
  ];
  return (
    <View>
      {/* Video */}
      <Video
        ref={video}
        style={{ width: "100%", height: 200 }}
        source={require("../../assets/video/video-2.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* Information */}
      <View style={tw`ml-3`}>
        <Text style={tw`text-gray-200 text-lg font-medium w-11/12 `}>
          {title}
        </Text>
        <Text style={tw`text-gray-400 text-sm  mt-1 font-medium`}>
          {views} views • {uploadedTime}
        </Text>
      </View>
      {/* icons */}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 4,
        }}
      >
        {iconsName.map((item) => (
          <RenderIcon
            key={item.name}
            name={item.name}
            text={item.text}
            setLike={setLike}
          />
        ))}
      </View>
    </View>
  );
};

export default VideoPlayScreen;

const RenderIcon = ({ name, text }) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <AntDesign name={name} size={24} color="white" />
    <Text style={tw`text-gray-100 mt-2`}>{text}</Text>
  </View>
);
