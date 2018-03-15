import {StyleSheet} from 'react-native';

import {colors, typography} from '../../config/styles';

export const styles = StyleSheet.create({
  title: {
    fontFamily: typography.fontMain,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 5,
  },
  subtitle: {
    fontFamily: typography.fontMainLight,
    textAlign:'center',
    marginBottom: 5,
  },
  hero: {
    width: "100%", 
    height: 200,
  },
  iconTextWrapper:{
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 10,
  },
  icon:{
    width: 25,
    height: 25,
    marginRight: 10,
  },
  competitionDesText: {
    fontFamily: typography.fontMainLight,
  },
  blurb:{
    fontFamily: typography.fontMainLight,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  secondaryTitle:{
    fontFamily: typography.fontBold,
    marginLeft: 20,
    marginVertical: 10,
  },
  imageGallery:{
    marginHorizontal: 20,
    marginVertical: 10,
  },
  singleImage:{
    width: 100, 
    height: 100,
    marginRight: 10,
  },
  all:{
    marginVertical: 10
  }
})