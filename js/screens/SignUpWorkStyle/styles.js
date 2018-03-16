import { StyleSheet, Dimensions } from "react-native";

import { colors, typography } from "../../config/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.white
  },
  heading: {
    textAlign: "center",
    fontFamily: typography.fontBold,
    fontSize: 18,
    lineHeight: 23,
    marginTop: 20,
    marginBottom: 10
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    paddingHorizontal: 25
  },
  selectionContainer: {
    marginVertical: 10
  },
  selectionWrapper: {
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("window").width <= 320 ? 90 : 120,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25
  },
  selectionImage: {
    width: Dimensions.get("window").width <= 320 ? 80 : 100,
    height: Dimensions.get("window").width <= 320 ? 80 : 100,
    marginRight: "7%"
  },
  selectionTextWrapper: {
    width: 200,
    justifyContent: "center"
  },
  selectionHeading: {
    fontFamily: typography.fontBold,
    lineHeight: 23
  },
  selectionDescription: {
    fontFamily: typography.fontMainLight,
    fontSize: 16
  },
  error: {
    color: colors.coralOrange,
    width: 200,
    textAlign: "center"
  },
  errorWrapper: {
    flex: 1,
    alignItems: "center"
  },
  loadingWrapper: {
    flex: 1,
    alignItems: "center"
  }
});
