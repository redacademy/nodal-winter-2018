import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";
export const styles = StyleSheet.create({
  background: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
    alignSelf: "center"
  },
  text: {
    color: colors.white,
    fontSize: 22,
    fontFamily: typography.fontBold,
    letterSpacing: 1
  }
});
