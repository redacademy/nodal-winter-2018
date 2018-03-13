import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import Onboarding from "./Onboarding";
import Landing from "./Landing";

export default class LandingScreen extends Component {
  static propTypes = {
    disableOnboarding: PropTypes.bool
  };
  static defaultProps = {
    disableOnboarding: false
  };
  constructor({ disableOnboarding }) {
    super();
    this.state = {
      onboarding: !disableOnboarding
    };
    this.switchToLanding = this.switchToLanding.bind(this);
  }

  switchToLanding() {
    this.setState({ onboarding: false });
  }

  render() {
    return (
      <View>
        {this.state.onboarding ? (
          <Onboarding switchToLanding={this.switchToLanding} />
        ) : (
          <Landing />
        )}
      </View>
    );
  }
}
