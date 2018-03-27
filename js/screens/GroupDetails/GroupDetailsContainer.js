import React, { Component } from "react";
import { connect } from "react-redux";

import { headerBarStyle } from "../../config/styles";
import GroupDetails from "./GroupDetails";

import PropTypes from "prop-types";

class GroupDetailsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "TEAM NAME",
    ...headerBarStyle(navigation)
  });

  render() {
    return (
      <GroupDetails
        bestMatch={this.props.bestMatch}
        otherMatches={this.props.otherMatches}
      />
    );
  }
}

const mapStateToProps = state => ({
  bestMatch: state.teams.bestMatch,
  otherMatches: state.teams.otherMatches
});

GroupDetailsContainer.propTypes = {
  bestMatch: PropTypes.object,
  otherMatches: PropTypes.array
};

GroupDetailsContainer.defaultProps = {
  bestMatch: {},
  otherMatches: []
};

export default connect(mapStateToProps)(GroupDetailsContainer);
