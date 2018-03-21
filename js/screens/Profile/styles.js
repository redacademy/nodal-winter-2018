import { StyleSheet, Dimensions } from "react-native";
import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    height: "100%"
  },
  mainContainer: {
    flex: 1,
    alignItems: "center"
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20
  },
  profilePhotoButton: {
    marginTop: 20,
    marginBottom: 20,
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
    position: "absolute",
    left: 140,
    top: 15,
    height: 30,
    width: 30
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
  nameText: {
    fontSize: 22,
    marginBottom: 10,
    fontFamily: typography.fontMain,
    alignSelf: "center"
  },
  titleText: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: typography.fontBold,
    alignSelf: "center"
  },
  paragraphText: {
    paddingHorizontal: 30,
    fontSize: 16,
    fontFamily: typography.fontMainLight
  },
  workstyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  workstyleIcons: {
    alignSelf: "center",
    height: 101,
    width: 101
  },
  workstyleText: {
    marginVertical: 10,
    alignSelf: "center",
    fontSize: 16,
    fontFamily: typography.fontMainLight
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
  },
  competitionsContainer: {
    width,
    marginTop: 30,
    flex: 3,
    alignItems: "center"
  },
  chipsContainer: {
    flexBasis: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    marginHorizontal: 5,
    width,
    alignSelf: "center"
  },
  chip: {
    flexWrap: "nowrap",
    height: 25,
    margin: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15
  },
  chipValue: {
    flexWrap: "nowrap",
    fontFamily: typography.fontMainLight,
    fontSize: 16
  }
});
