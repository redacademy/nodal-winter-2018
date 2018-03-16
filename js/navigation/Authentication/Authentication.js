import React, { Component } from "react";
import { AsyncStorage, View } from "react-native";
import PropTypes from "prop-types";
import { firebaseAuth } from "../../config/firebaseConfig";

import { signIn } from "../../helpers/firebaseAuth";
import styles from "./styles";
import Loading from "../../components/Loading";

export default class Authentication extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.login();
  }
  async login() {
    try {
      if (firebaseAuth.currentUser) {
        this.props.navigation.navigate("SignedIn");
        return;
      }
      const uid = await AsyncStorage.getItem("user");
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      if (uid !== null && email !== null && password !== null) {
        await signIn(email.toLowerCase(), password);
        this.props.navigation.navigate("SignedIn");
      } else {
        this.props.navigation.navigate("SignedOut");
      }
    } catch (e) {
      this.props.navigation.navigate("SignedOut");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
}
