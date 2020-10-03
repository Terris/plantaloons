import React from "react";
import { Dimensions, Image } from "react-native";

const window = Dimensions.get("window");

export default function InitializingScreen() {
  return (
    <Image
      style={{ width: window.width, height: window.height }}
      source={require("../assets/splash.png")}
      resizeMode="cover"
    />
  );
}
