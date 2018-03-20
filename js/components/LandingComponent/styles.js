import { StyleSheet, Dimensions } from "react-native";

import { colors, typography } from "../../config/styles";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  image: {
    position: "absolute",
    bottom: "48%"
  },
  heading: {
    position: "absolute",
    top: "59%",
    fontSize: 26,
    textAlign: "center",
    fontFamily: typography.fontBold
  },
  landingOptions: {
    position: "absolute",
    top: "65.6%",
    alignItems: "center",
    height: "34.4%"
  },
  landingSignInWrapper: {
    position: "absolute",
    bottom: "25%",
    paddingRight: 11,
    paddingLeft: 11,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 16
  },
  landingSignInBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    height: 22
  },
  landingSignIn: {
    fontSize: 16,
    fontFamily: typography.fontMainLight
  },
  landingContainer: {
    width,
    flex: 1,
    alignItems: "center"
  }
});
