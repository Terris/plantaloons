import { StyleSheet } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: Colors.white,
  },
  headerWrapper: {
    flexDirection: "row",
    height: 90,
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
