import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "./ui";
import { Layout } from "../styles";

const Header = ({ previous, navigation, scene }) => {
  return (
    <View style={Layout.headerWrapper}>
      <View style={{ width: "50%" }}>
        {previous && (
          <Button onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </Button>
        )}
      </View>
      <View
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button onPress={() => navigation.navigate("Settings")}>
          <Feather name="menu" size={24} color="black" />
        </Button>
      </View>
    </View>
  );
};

export default Header;
