import { StyleSheet, Dimensions } from "react-native";
import { colors, typography } from "../../config/styles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  mainContainer: {
    width,
    flex: 1,
    alignItems: "center"
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20
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
  titleText: {
    fontSize: 18,
    height: 50,
    marginBottom: 10,
    marginTop: 20,
    fontFamily: typography.fontMain,
    alignSelf: "center"
  },
  paragraphText: {
    fontSize: 16,
    fontFamily: typography.fontLight
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
  },
  competitionsContainer: {
    width,
    marginTop: 30,
    flex: 3,
    alignItems: "center"
  }
});
