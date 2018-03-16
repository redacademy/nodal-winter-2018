import { StyleSheet } from "react-native";
import {colors, typography} from '../../config/styles';

export const styles = StyleSheet.create({
  text:{
    fontFamily: typography.fontMainLight,
  },
  title:{
    fontFamily: typography.fontBold,
    fontSize: 16,
  },
  imageText:{
    width: 140,
    height: 120,
    marginHorizontal: 7.5,
    marginVertical: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 0.2,
    borderColor: colors.white,
    shadowColor: colors.transluscentGrey,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 1,
  },
  imageTextWrapper:{
    flexDirection: 'row',
    width: "100%",
    flexWrap: 'wrap',
    
  },
  main:{
    marginVertical: 20
  }

})