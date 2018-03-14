import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import DotPagination from "../../components/DotPagination";
import Landing from "./Landing";
import thoughtImage from "../../assets/images/onboarding/thought-illustrations.png";
import circlesImage from "../../assets/images/onboarding/circle-illustrations.png";
import chatImage from "../../assets/images/onboarding/chat-illustrations.png";
export default class Onboarding extends Component {
  static propTypes = {
    switchToLanding: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      stepper: 0,
      x: 0
    };
    this.images = [thoughtImage, circlesImage, chatImage];
    this.headings = ["EXPLORE", "FIND YOUR DREAM TEAM", "STAY IN TOUCH"];
    this.texts = [
      "Search and browse a variety of competitions, including art, business, sports, tech, and so much more!",
      "Set your goals for each \ncompetition and find a team \nthat shares them.",
      "Use our in-app messaging to communicate with teammates."
    ];
    this.width = Dimensions.get("window").width;
  }

  render() {
    return (
      <View>
        <ScrollView
          ref={sv => (this.scrollView = sv)}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          pinchGestureEnabled={false}
          scrollEventThrottle={16}
          onScroll={e => {
            this.setState({
              stepper: Math.floor(
                (Math.floor(e.nativeEvent.contentOffset.x / (this.width / 2)) +
                  1) /
                  2
              ),
              x: e.nativeEvent.contentOffset.x
            });
          }}
        >
          {this.images.map((v, i) => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.onboardingWrapper}
              key={i}
              onPress={() => {
                this.scrollView.scrollTo({
                  x: this.width * (this.state.stepper + 1),
                  y: 0,
                  animated: true
                });
              }}
            >
              <Image style={styles.image} source={this.images[i]} />
              <Text style={styles.heading}>{this.headings[i]}</Text>
              <Text style={styles.text}>{this.texts[i]}</Text>
            </TouchableOpacity>
          ))}
          <Landing />
        </ScrollView>
        <View
          style={{
            position: "absolute",
            width: this.width,
            bottom:
              this.state.x - this.width * 2.1 > 0
                ? -(this.state.x - this.width * 2.1) / 3
                : 0
          }}
        >
          <DotPagination length={3} current={this.state.stepper} />
          <TouchableOpacity
            onPress={() => {
              this.scrollView.scrollToEnd({ animated: false });
            }}
          >
            <Text style={styles.onboardingSkip}>SKIP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
