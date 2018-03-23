import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import fun1 from "../../assets/icons/circle/fun/1.png";
import fun2 from "../../assets/icons/circle/fun/2.png";
import fun3 from "../../assets/icons/circle/fun/3.png";
import fun4 from "../../assets/icons/circle/fun/4.png";
import fun5 from "../../assets/icons/circle/fun/5.png";
import grow1 from "../../assets/icons/circle/grow/1.png";
import grow2 from "../../assets/icons/circle/grow/2.png";
import grow3 from "../../assets/icons/circle/grow/3.png";
import grow4 from "../../assets/icons/circle/grow/4.png";
import grow5 from "../../assets/icons/circle/grow/5.png";
import win1 from "../../assets/icons/circle/win/1.png";
import win2 from "../../assets/icons/circle/win/2.png";
import win3 from "../../assets/icons/circle/win/3.png";
import win4 from "../../assets/icons/circle/win/4.png";
import win5 from "../../assets/icons/circle/win/5.png";
const circles = {
  fun1,
  fun2,
  fun3,
  fun4,
  fun5,
  grow1,
  grow2,
  grow3,
  grow4,
  grow5,
  win1,
  win2,
  win3,
  win4,
  win5
};

const Cirgoal = ({ fun, grow, win, size }) => (
  <View
    style={[
      styles.imageWrapper,
      { width: size + 4, height: size + 4, borderRadius: size / 2 }
    ]}
  >
    <Image
      source={circles[`fun${fun}`]}
      style={[
        styles.funCircle,
        {
          width: 100 / 200 * size,
          height: 151 / 200 * size
        }
      ]}
    />
    <Image
      source={circles[`grow${grow}`]}
      style={[
        styles.growCircle,
        {
          width: 100 / 200 * size,
          height: 151 / 200 * size,
          transform: [
            { translateY: -(6.5 / 200 * size) },
            { translateX: 97 / 200 * size },
            { rotate: "120deg" }
          ]
        }
      ]}
    />
    <Image
      source={circles[`win${win}`]}
      style={[
        styles.winCircle,
        {
          width: 100 / 200 * size,
          height: 151 / 200 * size,
          transform: [
            { translateY: 80.5 / 200 * size },
            { translateX: 54 / 200 * size },
            { rotate: "240deg" }
          ]
        }
      ]}
    />
  </View>
);

Cirgoal.propTypes = {
  fun: PropTypes.number.isRequired,
  grow: PropTypes.number.isRequired,
  win: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default Cirgoal;
