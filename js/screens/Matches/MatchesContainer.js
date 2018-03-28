import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchOtherUser } from "../../redux/modules/user";
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
    this.props.navigation.navigate("GroupDetailsC");
  };

  getUser = uid => {
    this.props.dispatch(fetchOtherUser(uid));
  };

  componentDidMount() {
    console.log(Object.keys(this.props.bestMatch.users));
    Object.keys(this.props.bestMatch.users).forEach(uid => this.getUser(uid));
    this.props.otherMatches.forEach(team =>
      Object.keys(team.users).forEach(uid => this.getUser(uid))
    );
  }

  render() {
    return (
      <Matches
        bestMatch={this.props.bestMatch}
        otherMatches={this.props.otherMatches}
        goToTeam={this.goToTeam}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = state => ({
  bestMatch: state.teams.bestMatch,
  otherMatches: state.teams.otherMatches,
  users: state.user.users
});

MatchesContainer.propTypes = {
  bestMatch: PropTypes.object,
  otherMatches: PropTypes.array,
  navigation: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

MatchesContainer.defaultProps = {
  bestMatch: {},
  otherMatches: [],
  users: {}
};

export default connect(mapStateToProps)(MatchesContainer);
