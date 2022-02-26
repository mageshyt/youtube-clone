import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screen/Home";
import VideoPlayScreen from "./screen/VideoPlayScreen";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoPlayScreen" component={VideoPlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
