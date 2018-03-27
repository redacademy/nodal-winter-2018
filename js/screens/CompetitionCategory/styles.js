import { Dimensions, StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  text: {
    fontFamily: typography.fontMainLight,
    marginTop: 10,
    marginLeft: 12
  },
  title: {
    marginTop: 5,
    fontFamily: typography.fontBold,
    fontSize: 16
  },
  imageText: {
    width: width > 320 ? 165 : 140,
    height: 120,
    marginHorizontal: 7.5,
    marginVertical: 6.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderWidth: 0.2,
    borderColor: colors.white,
    shadowColor: colors.transluscentGrey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 1
  },
  imageTextWrapper: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    marginVertical: 5,
    justifyContent: "center"
  },
  mainContainer: {
    backgroundColor: colors.white
  }
});
