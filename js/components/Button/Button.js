import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

const Button = ({ color, text, func, disabled, width }) => {
  return (
    <View style={{ opacity: disabled ? 0.5 : 1 }}>
      <TouchableOpacity
        style={[
          styles.background,
          { backgroundColor: color },
          { width: width }
        ]}
        onPress={() => {
          if (!disabled) func();
        }}
        activeOpacity={disabled ? 1 : 0.2}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  width: PropTypes.number,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  width: 275
};
