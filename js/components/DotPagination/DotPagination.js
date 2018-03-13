import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import active from "../../assets/icons/pagination/active.png";
import inactive from "../../assets/icons/pagination/inactive.png";

const DotPagination = ({ length, current }) => (
  <View style={styles.wrapper}>
    {new Array(length)
      .fill(undefined)
      .map((v, i) => (
        <Image
          key={i.toString()}
          style={styles.dot}
          source={i === current ? active : inactive}
        />
      ))}
  </View>
);

DotPagination.propTypes = {
  length: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired
};

export default DotPagination;
