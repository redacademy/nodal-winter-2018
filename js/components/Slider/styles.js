import { StyleSheet } from "react-native";

import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  scaleNumber: {
    color: colors.grey,
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    width: 6
  },
  one: {
    position: "absolute",
    left: -10,
    width: 40,
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  two: {
    position: "absolute",
    left: 54,
    width: 40,
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  three: {
    position: "absolute",
    left: 117.5,
    width: 40,
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  four: {
    position: "absolute",
    right: 54,
    width: 40,
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  five: {
    position: "absolute",
    right: -10,
    width: 40,
    height: 34,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  thumbStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 2
  },
  trackStyle: { height: 8, borderRadius: 4 },
  sliderWrapper: {
    width: 275,
    alignSelf: "center"
  },
  sliderBackground: {
    backgroundColor: colors.lightGrey,
    width: 275,
    height: 8,
    position: "absolute",
    top: 7,
    borderRadius: 5,
    zIndex: -1
  },
  slider: {
    position: "absolute",
    height: 22,
    alignSelf: "flex-start"
  },
  container: {
    backgroundColor: "white",
    width: 275,
    height: 34,
    alignSelf: "center"
  }
});
