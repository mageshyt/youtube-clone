import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function HomePageScreen({
  image,
  title,
  logo,
  channelName,
  views,
  uploadedTime,
  navigation,
}) {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("VideoPlayScreen")}
      >
        <View style={tw`items-center justify-center w-full `}>
          {/* Image */}
          <Image
            resizeMode="contain"
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      {/* Description */}
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* logo */}
        <Image
          resizeMode="contain"
          source={{
            uri: logo,
          }}
          style={styles.logo}
        />

        {/* Video title */}
        <Text style={tw`ml-2 text-sm text-gray-100 flex-wrap w-10/12`}>
          {title}
        </Text>
      </View>
      {/* Channel name ,views ,uploaded time */}
      <View style={tw`ml-16 mt-1`}>
        <VideoInfo
          name={channelName}
          views={views}
          uploadedTime={uploadedTime}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    // borderRadius: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

// channel info

const VideoInfo = ({ name, views, uploadedTime }) => (
  <View>
    <Text style={tw`text-gray-400 text-sm font-medium`}>
      {name} • {views} views • {uploadedTime}
    </Text>
  </View>
);
