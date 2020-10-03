import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import Colors from "./colors";

const scale = Dimensions.get("window").width / 375;

export function responsive(n: number) {
  return PixelRatio.roundToNearestPixel(n * scale);
}

export default StyleSheet.create({
  base: {
    fontFamily: "LibreFranklinRegular",
    fontSize: responsive(16),
    lineHeight: responsive(16),
    color: Colors.black,
  },
  base12: {
    fontFamily: "LibreFranklinRegular",
    fontSize: responsive(12),
    lineHeight: responsive(12),
    letterSpacing: 1,
    color: Colors.black,
  },
});
