import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 25
  },
  childrenWrapper: {
    flex: 1,
    paddingHorizontal: 7
  },
  profileImageWrapper: {
    width: 81,
    height: 81,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 40.5,
    overflow: "hidden",
    backgroundColor: colors.lightBlue
  },
  icon: {
    tintColor: colors.white
  },
  "single-profileImage": {
    width: 80,
    height: 80
  },
  "multiImage-1-full": {
    width: 80,
    height: 80,
    position: "absolute"
  },
  "multiImage-1-half": {
    width: 40,
    height: 80,
    position: "absolute"
  },
  "multiImage-2-half": {
    width: 40,
    height: 80,
    left: 40,
    position: "absolute"
  },
  "multiImage-1-quarter": {
    width: 40,
    height: 40,
    position: "absolute"
  },
  "multiImage-2-quarter": {
    width: 40,
    height: 40,
    top: 40,
    position: "absolute"
  },
  "multiImage-3-half": {
    width: 40,
    height: 80,
    left: 40,
    position: "absolute"
  },
  "multiImage-3-quarter": {
    width: 40,
    height: 40,
    left: 40,
    position: "absolute"
  },
  "multiImage-4-quarter": {
    width: 40,
    height: 40,
    left: 40,
    top: 40,
    position: "absolute"
  }
});
