import React from "react";
import { Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import backIcon from "../../assets/icons/navigation/active.png";
import closeIcon from "../../assets/icons/navigation/close.png";

const HeaderBarBack = ({ navigation, modal }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.goBack();
    }}
  >
    <Image source={modal ? closeIcon : backIcon} style={styles.icon} />
  </TouchableOpacity>
);
HeaderBarBack.propTypes = {
  navigation: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired
};
export default HeaderBarBack;
