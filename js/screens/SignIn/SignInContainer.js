import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import PropTypes from "prop-types";

import { signIn } from "../../helpers/firebaseAuth";
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
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      emailErr: { isError: false, text: "" },
      passwordErr: { isError: false, text: "" },
      firebaseErr: { isError: false, text: "" },
      loading: false
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.togglePasswordView = this.togglePasswordView.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateEmail(text) {
    this.setState({
      email: text
    });
  }
  updatePassword(text) {
    this.setState({
      password: text
    });
  }

  checkEmail() {
    if (this.state.email.length < 1) {
      this.setState({
        emailErr: { isError: true, text: "Email is required." }
      });
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        this.state.email
      )
    ) {
      this.setState({
        emailErr: { isError: true, text: "Please enter a valid email." }
      });
    } else {
      this.setState({ emailErr: { isError: false, text: "valid" } });
    }
  }
  checkPassword(text = "") {
    if (text.length < 1) {
      this.setState({
        passwordErr: { isError: true, text: "Password is required." }
      });
    } else if (text.length < 6) {
      this.setState({
        passwordErr: {
          isError: true,
          text: "Password must be at least 6 characters"
        }
      });
    } else {
      this.setState({ passwordErr: { isError: false, text: "valid" } });
    }
  }
  togglePasswordView() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  async submit() {
    this.setState({ loading: true });
    try {
      await signIn(this.state.email.toLowerCase(), this.state.password, true);
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
      <SignIn
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        email={this.state.email}
        password={this.state.password}
        emailErr={this.state.emailErr}
        passwordErr={this.state.passwordErr}
        checkEmail={this.checkEmail}
        checkPassword={this.checkPassword}
        showPassword={this.state.showPassword}
        togglePasswordView={this.togglePasswordView}
        submit={this.submit}
        loading={this.state.loading}
        firebaseErr={this.state.firebaseErr}
      />
    );
  }
}
