/* global require */ // This is to avoid a linting error with 'require'

import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { Image, View } from "react-native";
import { styles } from "./styles";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  // static route = {
  //   navigationBar: {
  //     title: "Profile",
  //     tintColor: "white",
  //     titleStyle: { fontFamily: "mission-gothic-bold" }
  //   }
  // };

  render() {
    const { loading } = this.props;

    return loading ? (
      <View style={styles.loadinggif}>
        {/* <Image source={require("../../assets/images/loading_blue.gif")} /> */}
        {/* Placeholder Image */}
      </View>
    ) : (
      <Profile />
    );
  }
}

ProfileContainer.propTypes = {
  // loading: PropTypes.bool.isRequired
};

export default ProfileContainer;
