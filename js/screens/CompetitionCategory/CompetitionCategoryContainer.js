import React, { Component } from "react";
import PropTypes from "prop-types";

import CompetitionCategory from './CompetitionCategory';

import { headerBarStyle } from "../../config/styles";

class CompetitionCategoryContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "COMPETITIONS",
    ...headerBarStyle(navigation),
    headerLeft: null
  });

  render() {
    return <CompetitionCategory navigation={this.props.navigation}/>
  }
}

export default CompetitionCategoryContainer;

CompetitionCategoryContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
