import React from "react";
import { View, Text, Image } from "react-native";

import tw from "tailwind-react-native-classnames";
const HeaderNav = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#1212",
        width: "100%",
        height: 100,
      }}
    >
      {/* Image */}
      <Image
        source={{
          uri: "https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png",
        }}
        style={{ width: 150, height: 120 }}
      />
    </View>
  );
};
export default HeaderNav;
