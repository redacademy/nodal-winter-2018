import { StyleSheet } from "react-native";
import { colors, typography, chipStyles } from "../../config/styles";
export const styles = StyleSheet.create({
  // body: {
  //   font-family: Arial, sans-serif
  // },
  // #title {
  //   letter-spacing: 1px;
  // }
  chips: {
    minHeight: chipStyles.chipMinHeight,
    borderColor: colors.black,
    lineHeight: 1,
    fontSize: 16
  },
  chipsInput: {
    flexWrap: "nowrap",
    width: "33%",
    minHeight: chipStyles.chipMinHeight,
    marginBottom: chipStyles.chipXSpacing,
    marginLeft: chipStyles.chipXSpacing * 2,
    border: 0,
    outline: "none",
    fontSize: 18
  },
  chip: {
    flexWrap: "nowrap",
    marginTop: chipStyles.chipXSpacing,
    marginBottom: chipStyles.chipXSpacing,
    marginLeft: chipStyles.chipXSpacing,
    marginRight: chipStyles.chipButtonWidth,
    position: "relative"
  },
  chipValue: {
    flexWrap: "nowrap",
    padding: chipStyles.chipXSpacing,
    paddingLeft: chipStyles.chipXSpacing,
    paddingRight: chipStyles.chipYSpacing / 2,
    backgroundColor: chipStyles.chipBackground,
    color: chipStyles.chipColor,
    fontWeight: "bold",
    borderRadius: chipStyles.chipBorderRadius
  },
  chipDeleteButton: {
    backgroundColor: chipStyles.chipBackground,
    color: chipStyles.chipColor,
    border: 0,
    borderRadius: chipStyles.chipBorderRadius,
    padding: chipStyles.chipXSpacing * 2,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: chipStyles.chipButtonWidth,
    lineHeight: 0.5,
    fontWeight: "bold"
  }
});
