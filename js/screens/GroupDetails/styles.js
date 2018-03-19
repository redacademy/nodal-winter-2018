import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  image: {
    width: 82,
    height: 82,
    borderRadius: 41
  },
  main: {
    marginHorizontal: 0,
    borderBottomWidth: 0.2,
    borderColor: colors.borderGrey,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    backgroundColor: colors.white
  },
  element: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.lightGrey
  },
  textWrapper: {
    paddingLeft: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "70%"
  },
  heading: {
    marginHorizontal: 0,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white
  },
  headingTitle: {
    alignSelf: "center",
    fontFamily: typography.fontMain,
    fontSize: 22
  },
  titleContainer: {
    marginHorizontal: 0,
    paddingVertical: 5,
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderColor: colors.lightGrey,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 1.2 }
  },
  title: {
    alignSelf: "center",
    fontFamily: typography.fontBold,
    fontSize: 18
  },
  text: {
    alignSelf: "center",
    fontFamily: typography.fontMainLight,
    fontSize: 14
  },
  left: {
    flexDirection: "row"
  },
  name: {
    fontFamily: typography.fontMain,
    fontSize: 14
  },
  programOrEmail: {
    fontFamily: typography.fontMainLight,
    fontSize: 14
  },
  profileData: {
    justifyContent: "center"
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: colors.white
  },
  leave: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: colors.grey
  }
});
