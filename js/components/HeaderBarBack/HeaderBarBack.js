import React from "react";
import { Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import backIcon from "../../assets/icons/navigation/active.png";

const HeaderBarBack = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Image source={backIcon} style={styles.icon} />
  </TouchableOpacity>
);
HeaderBarBack.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default HeaderBarBack;
