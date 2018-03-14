import React, { Component } from "react";
import PropTypes from "prop-types";

import { headerBarStyle } from "../../config/styles";
import SignIn from "./SignIn";
export default class SignInContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: "SIGN IN",
    ...headerBarStyle(navigation)
  });
  constructor() {
    super();
  }

  render() {
    return <SignIn />;
  }
}
