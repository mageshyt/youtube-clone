import React from "react";
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
const HeaderTab = () => {
  return (
    <View style={styles.container}>
      {/*Youtube logo */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../../assets/images/youtube.png")}
          style={{ width: 100, height: 28 }}
        />
        {/* <FontAwesome5 name="youtube" style={tw`text-4xl text-red-600 mr-2`} />
        <Text style={tw`text-gray-100 text-2xl font-bold`}>YouTube</Text> */}
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
            source={require("../../assets/images/logo.jpg")}
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#121212",
    width: "100%",
    height: 100,
    flexDirection: "row",
  },
});
export default HeaderTab;
