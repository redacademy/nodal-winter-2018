/**
 * Nodal - React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./js/components/Button";
import {
  createUserInAuthAndDB,
  signIn,
  signOut
} from "./js/helpers/firebaseAuth";
import CompetitionCategory from './js/screens/CompetitionCategory';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
 
        <CompetitionCategory />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF"
  }
});
