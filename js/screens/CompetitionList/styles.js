import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60
  },
  main: {
    marginVertical: 20,
    marginHorizontal: 0,
    borderBottomWidth: 0.2,
    borderColor: colors.borderGrey,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    backgroundColor: colors.white
  },
  element: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderTopWidth: 0.25,
    borderColor: colors.borderGrey
  },
  textWrapper: {
    paddingLeft: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "70%"
  },
  title: {
    fontFamily: typography.fontBold,
    fontSize: 12
  },
  text: {
    fontFamily: typography.fontMainLight,
    fontSize: 14
  },
  time: {
    position: "absolute",
    bottom: 0,
    right: 0,
    fontFamily: typography.fontMainLight,
    fontSize: 12
  },
  left: {
    flexDirection: "row"
  }
});
