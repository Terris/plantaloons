import React from "react";
import { View, Text } from "react-native";
import { Layout, Typography } from "../styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Layout.screenWrapper}>
      <Text style={Typography.base}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
