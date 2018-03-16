/**
 * Nodal - React Native App
 * https://github.com/redacademy/nodal-winter-2018
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Button from "./js/components/Button";
import Landing from "./js/screens/Landing";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Landing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});
