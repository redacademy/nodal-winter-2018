import React, { Component } from "react";
import PropTypes from "prop-types";

import Competition from "./Competition";
import { headerBarStyle } from "../../config/styles";

class CompetitionContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.category.toUpperCase(),
    ...headerBarStyle(navigation)
  });

  render() {
    return <Competition data={this.props.navigation.state.params.data} />;
  }
}

export default CompetitionContainer;

CompetitionContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
