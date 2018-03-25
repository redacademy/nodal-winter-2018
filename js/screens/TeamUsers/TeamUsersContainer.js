import React, { Component } from "react";
import PropTypes from "prop-types";
import TeamUsers from "./TeamUsers";

import { headerBarStyle } from "../../config/styles";

export default class TeamUsersContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    ...headerBarStyle(navigation)
  });

  render() {
    return <TeamUsers />;
  }
}
