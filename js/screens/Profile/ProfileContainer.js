import React, { Component } from "react";
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

  render() {
    return <Profile user={this.state.user} />;
  }
}

export default ProfileContainer;
