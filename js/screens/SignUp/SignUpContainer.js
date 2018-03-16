import React, { Component } from "react";
import PropTypes from "prop-types";

import { headerBarStyle } from "../../config/styles";
import SignUp from "./SignUp";
export default class SignUpContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: "SIGN UP",
    ...headerBarStyle(navigation)
  });
  constructor() {
    super();
  }

  render() {
    return <SignUp />;
  }
}
