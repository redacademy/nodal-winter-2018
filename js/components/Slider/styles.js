import { StyleSheet } from "react-native";

import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  scaleNumber: {
    color: colors.grey,
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    width: 6
  },
  numberWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 7
  },
  thumbStyle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: colors.white,
    borderWidth: 1.5
  },
  trackStyle: { height: 7, borderRadius: 5 },
  slider: { width: 275, height: 18, alignSelf: "center" },
  container: { backgroundColor: "white", width: 280, alignSelf: "center" }
});
