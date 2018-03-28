import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
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
    borderBottomWidth: 2,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
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
    paddingVertical: 6,
    borderBottomWidth: 1.5,
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
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 1.2 }
  },
  mainTitle: {
    alignSelf: "center",
    paddingTop: 3,
    fontFamily: typography.fontBold,
    fontSize: 14
  },
  title: {
    alignSelf: "flex-start",
    paddingLeft: 30,
    paddingBottom: 2,
    fontFamily: typography.fontBold,
    fontSize: 18
  },
  text: {
    alignSelf: "center",
    fontFamily: typography.fontMainLight,
    fontSize: 16
  },
  teamTitle: {
    alignSelf: "center",
    fontSize: 14,
    fontFamily: typography.fontBold
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
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: colors.lightGrey
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
  },
  bestMatchContainer: {
    width: "100%",
    backgroundColor: colors.white,
    borderBottomWidth: 0.2,
    borderColor: colors.borderGrey,
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    zIndex: 5
  }
});
