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
  transluscentWhite: "rgba(255,255,255,0.8)",
  lightBlue: "rgb(175, 170, 249)"
};

export const typography = {
  fontMainLight: "MissionGothic-Light",
  fontMain: "MissionGothic-Regular",
  fontBold: "MissionGothic-Bold",
  fontBlack: "MissionGothic-Black",
  fontThin: "MissionGothic-Thin",
  fontMainLightItalic: "MissionGothic-LightItalic",
  fontMainItalic: "MissionGothic-RegularItalic",
  fontBoldItalic: "MissionGothic-BoldItalic",
  fontBlackItalic: "MissionGothic-BlackItalic",
  fontThinitalic: "MissionGothic-ThinItalic"
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
    letterSpacing: 0.5,
    paddingBottom: 2,
    width: "100%"
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    height: 60,
    paddingLeft: 20,
    paddingRight: 0
  },
  headerBackImage: null,
  headerLeft: <HeaderBarBack navigation={navigation} />
});
