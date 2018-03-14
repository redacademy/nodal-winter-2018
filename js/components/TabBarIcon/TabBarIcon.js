import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import CompIconBlack from "../../assets/icons/tab-bar-icons/competitions/black.png";
import CompIconGrey from "../../assets/icons/tab-bar-icons/competitions/grey.png";
import TeamsIconBlack from "../../assets/icons/tab-bar-icons/messages/black.png";
import TeamsIconGrey from "../../assets/icons/tab-bar-icons/messages/grey.png";
import ProfileIconBlack from "../../assets/icons/tab-bar-icons/profile/black.png";
import ProfileIconGrey from "../../assets/icons/tab-bar-icons/profile/grey.png";

const icons = {
  Competitions: {
    black: CompIconBlack,
    grey: CompIconGrey
  },
  Teams: {
    black: TeamsIconBlack,
    grey: TeamsIconGrey
  },
  Profile: {
    black: ProfileIconBlack,
    grey: ProfileIconGrey
  }
};
const TabBarIcon = ({ routeName, color }) => (
  <Image source={icons[routeName][color]} style={styles.icon} />
);
TabBarIcon.propTypes = {
  routeName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
export default TabBarIcon;
