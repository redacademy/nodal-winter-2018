import { StyleSheet, Dimensions } from "react-native";
import { typography } from "../../config/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  chipsContainer: {
    flexBasis: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: 15,
    margin: 15,
    width,
    alignSelf: "center"
  },
  chipsInput: {
    width: 150,
    height: 50,
    fontSize: 18
  },
  chip: {
    flexWrap: "nowrap",
    height: 30,
    padding: 3,
    margin: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15
  },
  chipValue: {
    flexWrap: "nowrap",
    fontFamily: typography.fontMainLight,
    fontSize: 16
  }
});
