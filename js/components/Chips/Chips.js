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
  value
}) => (
  <View style={styles.chipsContainer}>
    {chips &&
      chips.map((chip, index) => {
        return (
          <View style={styles.chip} key={index}>
            <TouchableOpacity>
              <Text style={styles.chipValue}>{chip}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    {
      <TextInput
        type="text"
        autoCorrect={false}
        value={value}
        ref={inputRef}
        autoCapitalize={"words"}
        style={styles.chipsInput}
        placeholder={placeholder}
        onChangeText={setText}
        onSubmitEditing={handleEditComplete}
      />
    }
  </View>
);

Chips.propTypes = {
  chips: PropTypes.array,
  placeholder: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  value: PropTypes.string,
  handleEditComplete: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired
};

export default Chips;
