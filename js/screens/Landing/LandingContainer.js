import React, { Component } from "react";
import PropTypes from "prop-types";

import Landing from "./Landing";

export default class LandingContainer extends Component {
  static propTypes = {
    disableOnboarding: PropTypes.bool,
    navigation: PropTypes.object.isRequired
  };
  static defaultProps = {
    disableOnboarding: false
  };
  static navigationOptions = {
    header: null
  };
  constructor({ disableOnboarding, navigation }) {
    super();
    if (
      navigation.state.params &&
      typeof navigation.state.params.disableOnboarding === "boolean"
    )
      disableOnboarding = navigation.state.params.disableOnboarding;
    this.state = {
      onboarding: !disableOnboarding
    };
    this.navigateToSignIn = this.navigateToSignIn.bind(this);
    this.navigateToSignUp = this.navigateToSignUp.bind(this);
  }

  navigateToSignIn() {
    this.props.navigation.navigate("SignIn");
  }

  navigateToSignUp() {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <Landing
        navigateToSignIn={this.navigateToSignIn}
        navigateToSignUp={this.navigateToSignUp}
        onboarding={this.state.onboarding}
      />
    );
  }
}
