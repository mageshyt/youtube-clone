import React from "react";
import { View, Text, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import tw from "tailwind-react-native-classnames";
import { Divider } from "react-native-elements";
import { recommendation } from "../../assets/data/data";

const RecommendationTab = () => {
  return (
    <View style={tw`h-12 justify-center  `}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tw` flex-row items-center `}>
          <View
            style={tw` flex-row items-center justify-around  p-0.5 w-24 ml-2 rounded `}
          >
            {/* compass icon */}
            <FontAwesome5 name="compass" size={24} color="white" />
            <Text style={tw`text-lg text-white ml-1`}>Explore</Text>
          </View>
          {/* Vertical Line  */}
          <View style={tw`w-0.5 bg-gray-300 h-7 ml-2 mr-2`} />

          {/* recommendation List */}

          <View style={tw`flex-row`}>
            {recommendation.map((text, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: text === "All" ? "white" : "#474a48",
                  borderRadius: 30,
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <Text
                  style={{
                    color: text === "All" ? "black" : "white",
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    fontSize: 16,
                  }}
                >
                  {text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default RecommendationTab;
