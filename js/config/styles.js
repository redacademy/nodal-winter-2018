import React from "react";
import HeaderBarBack from "../components/HeaderBarBack";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  lightGrey: "#eeeeee",
  grey: "#999999",
  darkGrey: "#333333",
  coralOrange: "#F79975",
  dandelionYellow: "#FDE966",
  cornflowerBlue: "#6067EC",
  borealisGreen: "#4ABB8B",
  transluscentGrey: "rgba(0,0,0,0.4)",
  borderGrey: "rgba(158, 158, 158, 1)",
  transluscentWhite: "rgba(255,255,255,0.8)"
};

export const typography = {
  fontMainLight: "MissionGothic-Light",
  fontMain: "Mission Gothic",
  fontBold: "MissionGothic-Bold",
  fontBlack: "mission-gothic-black",
  fontThin: "mission-gothic-thin",
  fontMainLightItalic: "mission-gothic-light-italic",
  fontMainItalic: "mission-gothic-regular-italic",
  fontBoldItalic: "mission-gothic-bold-italic",
  fontBlackItalic: "mission-gothic-black-italic",
  fontThinitalic: "mission-gothic-thin-italic"
};

export const containerMargin = {
  marginLeft: 20,
  marginRight: 20,
  marginTop: 15,
  marginBottom: 15
};

export const headerBarStyle = navigation => ({
  headerTitleStyle: {
    fontSize: 26,
    fontFamily: typography.fontBold,
    letterSpacing: 1,
    paddingBottom: 2
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    height: 60,
    paddingLeft: 25,
    paddingRight: 25
  },
  headerBackImage: null,
  headerLeft: <HeaderBarBack navigation={navigation} />
});
