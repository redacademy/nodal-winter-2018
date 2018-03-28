import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Teams from "./Teams";
import { getAllTeams } from "../../helpers/teamUserCardHelper";

import { headerBarStyle } from "../../config/styles";

class TeamsContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: "MY TEAMS",
    ...headerBarStyle(navigation),
    headerLeft: null
  });
  goToTeam = users => {
    this.props.navigation.navigate("GroupDetails", { users });
  };
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }
  async func() {
    const newTeams = await getAllTeams();
    console.log(newTeams);
    this.setState({ teams: newTeams });
  }
  componentDidMount() {
    this.func();
  }

  render() {
    return (
      <Teams
        goToTeam={this.goToTeam}
        users={this.props.users}
        teams={this.state.teams}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users
});

TeamsContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

TeamsContainer.defaultProps = {
  users: {}
};

export default connect(mapStateToProps)(TeamsContainer);
