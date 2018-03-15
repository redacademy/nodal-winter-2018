/**
 * Nodal - React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import CompetitionList from "./js/screens/CompetitionList";
import {
  createUserInAuthAndDB,
  signIn,
  signOut
} from "./js/helpers/firebaseAuth";

export default class App extends Component {
  render() {
    return <CompetitionList />;
  }
}
