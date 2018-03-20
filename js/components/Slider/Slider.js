import React, { Component } from "react";
import { View, Text } from "react-native";
import Slider from "react-native-slider";
import PropTypes from "prop-types";

import { colors } from "../../config/styles";
import { styles } from "./styles";

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1
    };
  }

  render() {
    const { sliderColor } = this.props;
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          step={1}
          minimumValue={1}
          maximumValue={5}
          thumbTintColor={sliderColor}
          maximumTrackTintColor={colors.lightGrey}
          minimumTrackTintColor={sliderColor}
          value={this.state.scale}
          onValueChange={val => this.setState({ scale: val })}
          onSlidingComplete={
            // TODO: helper function here to get the scale of current slider
            () => console.log(this.state.scale)
          }
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
        />
        <View style={styles.numberWrapper}>
          <Text style={styles.scaleNumber}>1</Text>
          <Text style={styles.scaleNumber}>2</Text>
          <Text style={styles.scaleNumber}>3</Text>
          <Text style={styles.scaleNumber}>4</Text>
          <Text style={styles.scaleNumber}>5</Text>
        </View>
      </View>
    );
  }
}

export default SliderComponent;

SliderComponent.propTypes = {
  sliderColor: PropTypes.string.isRequired
};
