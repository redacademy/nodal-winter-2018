import React, { Component } from "react";
import PropTypes from "prop-types";

import Landing from "./Landing";

export default class LandingContainer extends Component {
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
  }

  render() {
    return <Landing onboarding={this.state.onboarding} />;
  }
}
