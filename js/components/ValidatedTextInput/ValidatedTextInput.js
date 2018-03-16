import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import show from "../../assets/icons/navigation/reveal/active.png";
import hide from "../../assets/icons/navigation/reveal/inactive.png";
import { colors } from "../../config/styles";
const ValidatedTextInput = ({
  text,
  error,
  placeholder,
  check,
  update,
  type,
  hidden,
  toggleShowHide,
  style
}) => (
  <View style={[styles.container, style]}>
    <View
      style={[
        type === "password" ? styles.wrapperPass : styles.wrapper,
        {
          borderColor: error.isError
            ? colors.coralOrange
            : error.text === "valid" ? colors.borealisGreen : colors.grey
        }
      ]}
    >
      <TextInput
        spellCheck={false}
        blurOnSubmit={true}
        keyboardType={type === "email" ? "email-address" : "default"}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        value={text}
        secureTextEntry={type === "password" && hidden}
        onEndEditing={() => {
          type === "password" ? () => {} : check();
        }}
        onChangeText={text => {
          update(text);
          if (type === "password") check(text);
        }}
        selectTextOnFocus={type === "password"}
        returnKeyType="done"
        style={type === "password" ? styles.inputPass : styles.input}
      />
    </View>
    {type === "password" && (
      <TouchableOpacity
        onPress={() => {
          toggleShowHide();
        }}
      >
        <Image source={hidden ? show : hide} style={styles.icon} />
      </TouchableOpacity>
    )}
    {error.isError && <Text style={styles.error}>{error.text}</Text>}
  </View>
);

ValidatedTextInput.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  check: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  hidden: PropTypes.bool,
  toggleShowHide: PropTypes.func,
  style: PropTypes.object
};
ValidatedTextInput.defaultProps = {
  placeholder: "",
  type: "",
  toggleShowHide: () => {},
  style: {}
};

export default ValidatedTextInput;
