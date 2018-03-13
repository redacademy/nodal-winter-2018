import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Button = ({ color, text, func}) => (
  <TouchableOpacity style={[styles.background, { backgroundColor: color }]} onPress={func} >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;


// TODO: Add config styles once it's pushed up.
const styles = StyleSheet.create({
  background: {
    width: 275,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  text: {
    color: "white",
    fontSize: 20 
  }
});
