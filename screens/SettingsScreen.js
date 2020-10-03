import React from "react";
import { View, Text } from "react-native";
import { Layout, Typography } from "../styles";

const SettingsScreen = () => {
  return (
    <View style={Layout.screenWrapper}>
      <Text style={Typography.base}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
