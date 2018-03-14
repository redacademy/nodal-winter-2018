import { StyleSheet, Dimensions } from "react-native";

import { colors, typography } from "../../config/styles";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  onboardingWrapper: {
    width,
    flex: 1,
    alignItems: "center"
  },
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
  text: {
    position: "absolute",
    top: "66.5%",
    fontSize: 18,
    marginLeft: 45,
    marginRight: 45,
    textAlign: "center",
    lineHeight: 24,
    fontFamily: typography.fontMainLight
  },
  onboardingSkip: {
    marginLeft: 25,
    marginBottom: 30,
    fontSize: 16,
    fontFamily: typography.fontThin,
    letterSpacing: 1,
    color: colors.darkGrey
  }
});
