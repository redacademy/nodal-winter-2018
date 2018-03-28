import { StyleSheet, Dimensions } from "react-native";

import { colors, typography } from "../../config/styles";
const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height,
    paddingTop: 30,
    paddingBottom: 20,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  image: {
    alignSelf: "center",
    height: 240,
    width: 300,
    marginTop: 30
  },
  imageBubbles: {
    alignSelf: "center",
    height: 195,
    width: 215,
    marginVertical: 50
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 26,
    textAlign: "center",
    fontFamily: typography.fontBold
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 50,
    textAlign: "center",
    fontFamily: typography.fontMainLight
  },
  loading: {
    alignSelf: "center",
    width: 100,
    height: 50
  },
  noThanks: {
    color: colors.grey,
    marginTop: 7,
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 14,
    fontFamily: typography.fontMainLight
  },
  buttonView: {
    marginTop: 5
  }
});
