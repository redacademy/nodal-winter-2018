import { StyleSheet } from "react-native";
import { typography } from "../../config/styles";

export const styles = StyleSheet.create({
  chipsContainer: {
    flexBasis: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    marginHorizontal: 5,
    width: 250,
    alignSelf: "center"
  },
  chipsInput: {
    marginHorizontal: 20,
    width: 150,
    height: 50,
    fontSize: 18
  },
  chip: {
    flexWrap: "nowrap",
    height: 25,
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
