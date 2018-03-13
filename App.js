/**
 * Nodal - React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// import Button from "./js/components/Button";
import EditProfileContainer from "./js/screens/EditProfile";
import ProfileContainer from "./js/screens/Profile";
import {
  createUserInAuthAndDB,
  signIn,
  signOut
} from "./js/helpers/firebaseAuth";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Landing /> */}
        <ProfileContainer />
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
