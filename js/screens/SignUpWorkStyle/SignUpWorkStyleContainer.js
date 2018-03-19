import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import PropTypes from "prop-types";

import { updateWorkStyle } from "../../helpers/firebaseStore";
import { headerBarStyle } from "../../config/styles";
import SignUpWorkStyle from "./SignUpWorkStyle";
export default class SignUpWorkStyleContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: "SIGN UP",
    ...headerBarStyle(navigation),
    headerLeft: null
  });
  constructor() {
    super();
    this.state = {
      workStyle: "",
      firebaseErr: { isError: false, text: "" },
      loading: false
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(workStyle) {
    this.setState({
      workStyle
    });
  }

  async submit() {
    this.setState({ loading: true });
    try {
      await updateWorkStyle(this.state.workStyle);
    } catch (e) {
      this.setState({
        firebaseErr: {
          isError: true,
          text: e.message
        },
        loading: false
      });
      return;
    }
    this.setState({
      firebaseErr: {
        isError: false,
        text: ""
      },
      loading: false
    });
    this.props.navigation.navigate("SignedIn");
  }

  render() {
    return (
      <SignUpWorkStyle
        current={this.state.workStyle}
        update={this.update}
        submit={this.submit}
        loading={this.state.loading}
        firebaseErr={this.state.firebaseErr}
      />
    );
  }
}
