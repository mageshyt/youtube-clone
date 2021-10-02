import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function VideoScreen() {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={tw`items-center justify-center`}>
          {/* Image */}
          <Image
            resizeMode="contain"
            source={{
              uri: "https://i.ytimg.com/vi/FkqZfGEav9c/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF42KrD7AOkWfoWRINvB7eAnfYJA",
            }}
            style={styles.image}
          />
        </View>
        {/* Description */}
        <View style={{ marginTop: 5 }}>
          {/* logo */}
          <Image
            resizeMode="contain"
            source={{
              uri: "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj",
            }}
            style={styles.logo}
          />
          {/* Video title */}
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});
