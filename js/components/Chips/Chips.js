import React from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Chips = ({
  chips,
  placeholder,
  setText,
  handleEditComplete,
  inputRef,
  value,
  deleteChip
}) => (
  <View style={styles.chipsContainer}>
    {chips &&
      chips.map((chip, index) => {
        return (
          <View style={styles.chip} key={index}>
            <TouchableOpacity onPress={deleteChip}>
              <Text style={styles.chipValue}>{chip}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    <TextInput
      type="text"
      autoCorrect={false}
      value={value}
      ref={inputRef}
      autoCapitalize={"words"}
      style={styles.chipsInput}
      placeholder={placeholder}
      onChangeText={text => {
        setText(text);
      }}
      onSubmitEditing={handleEditComplete}
    />
  </View>
);

Chips.propTypes = {
  chips: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleEditComplete: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
  deleteChip: PropTypes.func.isRequired
};

export default Chips;
