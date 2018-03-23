import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Slider from "react-native-slider";
import PropTypes from "prop-types";

import { styles } from "./styles";
const SliderComponent = ({ sliderColor, maxBG, value, update, max }) => (
  <View style={styles.container}>
    <View style={styles.sliderWrapper}>
      <Slider
        style={[styles.slider, { width: 63.75 * (max - 1) + 20 }]}
        step={1}
        minimumValue={1}
        maximumValue={max}
        thumbTintColor={sliderColor}
        minimumTrackTintColor={sliderColor}
        maximumTrackTintColor={maxBG}
        value={value}
        onValueChange={val => {
          val !== value && update(val);
        }}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
      />
      <View style={styles.sliderBackground} />
      <TouchableWithoutFeedback
        onPress={() => {
          update(1);
        }}
      >
        <View style={[styles.one, { zIndex: value === 1 ? -2 : 2 }]}>
          <Text style={styles.scaleNumber}>1</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          update(2);
        }}
      >
        <View style={[styles.two, { zIndex: value === 2 ? -2 : 2 }]}>
          <Text style={styles.scaleNumber}>2</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          update(3);
        }}
      >
        <View style={[styles.three, { zIndex: value === 3 ? -2 : 2 }]}>
          <Text style={styles.scaleNumber}>3</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          update(4);
        }}
      >
        <View style={[styles.four, { zIndex: value === 4 ? -2 : 2 }]}>
          <Text style={styles.scaleNumber}>4</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          update(5);
        }}
      >
        <View style={[styles.five, { zIndex: value === 5 ? -2 : 2 }]}>
          <Text style={styles.scaleNumber}>5</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

export default SliderComponent;

SliderComponent.propTypes = {
  sliderColor: PropTypes.string.isRequired,
  maxBG: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired
};
