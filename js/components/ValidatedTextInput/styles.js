import { StyleSheet } from "react-native";

import { colors, typography } from "../../config/styles";
export default StyleSheet.create({
  icon: { height: 30, width: 30, marginLeft: 14 },
  wrapper: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.grey,
    width: 303,
    height: 40,
    justifyContent: "center",
    paddingLeft: 25
  },
  wrapperPass: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.grey,
    width: 258,
    height: 40,
    justifyContent: "center",
    paddingLeft: 25
  },
  input: {
    lineHeight: 20,
    height: 38,
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    width: 275
  },
  inputPass: {
    lineHeight: 20,
    height: 38,
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    width: 230
  },
  error: {
    position: "absolute",
    bottom: 3,
    color: colors.coralOrange
  },
  container: {
    paddingBottom: 20,
    width: 305,
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  }
});
