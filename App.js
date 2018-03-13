/**
 * Nodal - React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './js/components/Button';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <Button color={"coral"} text={"Sign Up"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
