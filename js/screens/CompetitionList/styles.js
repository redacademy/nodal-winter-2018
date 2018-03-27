import { Dimensions, StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    height: "100%"
  },
  image: {
    width: 70,
    height: 70
  },
  main: {
    backgroundColor: colors.white,
    marginHorizontal: 0,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.7,
    shadowRadius: 1
  },
  element: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey
  },
  textWrapper: {
    paddingLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "70%"
  },
  title: {
    fontFamily: typography.fontBold,
    fontSize: width > 320 ? 14 : 12
  },
  text: {
    fontFamily: typography.fontMainLight,
    fontSize: width > 320 ? 16 : 14
  },
  time: {
    position: "absolute",
    bottom: 0,
    right: 0,
    fontFamily: typography.fontMainLight,
    fontSize: width > 320 ? 14 : 12
  },
  left: {
    flexDirection: "row"
  }
});
