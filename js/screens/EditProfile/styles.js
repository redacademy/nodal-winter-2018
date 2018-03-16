import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%"
  },
  profilePhotoButton: {
    marginTop: 30,
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: colors.lightBlue,
    marginRight: 12,
    borderColor: colors.black,
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  profileIcon: {
    height: 100,
    width: 100,
    tintColor: "white"
  },
  profileCircleText: {
    fontFamily: typography.fontMain,
    fontSize: 22
  },
  profileEditIcon: {
    marginLeft: 10,
    height: 20,
    width: 20
  },
  textInput: {
    height: 40,
    width: 250,
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 100,
    borderColor: colors.grey,
    borderWidth: 1
  },
  screenText: {
    fontSize: 18,
    marginRight: 20,
    fontFamily: typography.fontMain
  },
  heading: {
    margin: 15
  },
  workstyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  workstyleIcons: {
    marginHorizontal: 5
  },
  workstyleText: {
    alignSelf: "center",
    fontFamily: typography.fontLight
  },
  largeInput: {
    height: 120,
    width: 250,
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 20,
    borderColor: colors.grey,
    borderWidth: 1
  }
});
