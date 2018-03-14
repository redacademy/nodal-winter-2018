import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

const Button = ({ color, text, func }) => {
  return (
    <TouchableOpacity
      style={[styles.background, { backgroundColor: color }]}
      onPress={func}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};
