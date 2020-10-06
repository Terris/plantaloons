import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Typography } from "../../../styles";

export const Button = ({ title, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {title && <Text style={Typography.sans16black}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};
