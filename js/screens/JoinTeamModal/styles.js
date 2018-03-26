import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white
  },
  error:{
    fontFamily: typography.fontMainLight,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 21,
    paddingVertical: 10,
    color: 'red'
  },
  instructions: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 21,
    paddingVertical: 10
  },
  label: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    lineHeight: 21,
    marginVertical: 8
  },
  points: {
    fontFamily: typography.fontBlack,
    fontSize: 20,
    lineHeight: 21
  },
  pointsLabel: {
    fontFamily: typography.fontBold,
    fontSize: 18,
    lineHeight: 21
  },
  cirgoalWrapper: {
    marginTop: 20,
    marginBottom: 10
  }
});
