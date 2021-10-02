import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
const HeaderTab = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#121212",
        width: "100%",
        height: 100,
        flexDirection: "row",
      }}
    >
      {/* logo */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <FontAwesome5 name="youtube" style={tw`text-4xl text-red-600`} />
        <Text style={tw`text-gray-100 text-xl font-bold`}>YouTube</Text>
      </View>
      {/* ---------------------------------------------------------------- */}
      {/* Icons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "",
          width: 250,
          alignItems: "center",
        }}
      >
        {IconName.map((name, index) => (
          <TouchableOpacity key={index} activeOpacity={0.6}>
            <HeaderIcon name={name} />
          </TouchableOpacity>
        ))}
        {/* User pic */}
        <View>
          <Image
            source={require("../assets/images/logo.jpg")}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>
      </View>
    </View>
  );
};
const IconName = ["video", "chromecast", "bell", "search"];
const HeaderIcon = ({ name }) => (
  <FontAwesome5 name={name} style={tw`text-xl  text-gray-100`} />
);
export default HeaderTab;
