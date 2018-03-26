import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import {
//   fetchBestMatch,
//   fetchOtherMatches,
//   addUserToTeam
// } from "../../redux/modules/teams";
// import { fetchUserWorkstyle } from "../../redux/modules/user";
// import { getUserScore } from "../../redux/modules/user";

import Competition from "./Competition";
import { headerBarStyle } from "../../config/styles";

class CompetitionContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.category.toUpperCase(),
    ...headerBarStyle(navigation)
  });

  render() {
    return (
      <Competition
        data={this.props.navigation.state.params.data}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = state => ({
  userScore: state.user.score,
  userWorkstyle: state.user.workstyle,
  teamId: state.teams.bestMatch.id
});

export default connect(mapStateToProps)(CompetitionContainer);

CompetitionContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  userScore: PropTypes.array.isRequired,
  userWorkstyle: PropTypes.string.isRequired,
  teamId: PropTypes.string
};

CompetitionContainer.defaultProps = {
  teamId: ""
};
