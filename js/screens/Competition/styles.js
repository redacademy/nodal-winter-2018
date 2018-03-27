import { Dimensions, StyleSheet } from "react-native";

import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  title: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    textAlign: "center"
  },
  subtitle: {
    fontFamily: typography.fontMainLight,
    textAlign: "center",
    marginBottom: 5,
    fontSize: width > 320 ? 16 : 14
  },
  hero: {
    width: "100%",
    height: 200,
    marginBottom: 10
  },
  iconTextWrapper: {
    flexDirection: "row",
    marginLeft: width > 320 ? 40 : 30,
    marginVertical: 10,
    alignItems: "center"
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  competitionDesText: {
    fontFamily: typography.fontMainLight,
    fontSize: width > 320 ? 16 : 14
  },
  blurbWrapper: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  blurb: {
    fontFamily: typography.fontMainLight,
    fontSize: width > 320? 16 : 14
  },
  secondaryTitle: {
    fontFamily: typography.fontBold,
    fontSize: width > 320 ? 16 : 14,
    marginLeft: 20,
    marginVertical: 10
  },
  imageGallery: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  singleImage: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  all: {
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: colors.white
  },
  readMore: {
    fontFamily: typography.fontMainLight,
    color: colors.borealisGreen
  }
});
