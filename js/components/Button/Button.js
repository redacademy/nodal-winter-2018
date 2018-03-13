import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { styles } from "./styles";

// TODO: Add config styles once it's pushed up.
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
  color: PropTypes.string,
  text: PropTypes.string,
  func: PropTypes.func
};
