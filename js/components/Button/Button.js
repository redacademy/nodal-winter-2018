import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

const Button = ({ color, text, func, disabled }) => {
  return (
    <View style={{ opacity: disabled ? 0.5 : 1 }}>
      <TouchableOpacity
        style={[styles.background, { backgroundColor: color }]}
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
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};
