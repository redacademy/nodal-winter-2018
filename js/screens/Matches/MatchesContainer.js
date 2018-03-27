import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { headerBarStyle } from "../../config/styles";
import Matches from "./Matches";

class MatchesContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "MATCHES",
    ...headerBarStyle(navigation)
  });

  goToTeam = () => {
    this.props.navigation.navigate("GroupDetails");
  };

  render() {
    return (
      <Matches
        bestMatch={this.props.bestMatch}
        otherMatches={this.props.otherMatches}
        goToTeam={this.goToTeam}
      />
    );
  }
}

const mapStateToProps = state => ({
  bestMatch: state.teams.bestMatch,
  otherMatches: state.teams.otherMatches
});

MatchesContainer.propTypes = {
  bestMatch: PropTypes.object,
  otherMatches: PropTypes.array,
  navigation: PropTypes.object.isRequired
};

MatchesContainer.defaultProps = {
  bestMatch: {},
  otherMatches: []
};

export default connect(mapStateToProps)(MatchesContainer);
