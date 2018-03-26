import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createTeamAndAddUser } from "../../redux/modules/teams";
import MatchScreenLoading from "./MatchScreenLoading";

class MatchScreenLoadingContainer extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.createNewTeamWithUser = this.createNewTeamWithUser.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.error) {
      this.props.navigation.navigate("JoinTeamModal", {
        title: this.props.navigation.state.params.title,
        teamSize: this.props.navigation.state.params.teamSize,
        competitionId: this.props.navigation.state.params.competitionId
      });
    }
  }

  createNewTeamWithUser = () => {
    const {
      workstyle,
      type,
      competitionId,
      teamSize,
      score
    } = this.props.tempData;
    this.props.dispatch(
      createTeamAndAddUser(workstyle, type, competitionId, teamSize, score)
    );
  };
  render() {
    return (
      <MatchScreenLoading
        loading={this.props.loading}
        navigation={this.props.navigation}
        noMatch={this.props.noMatch}
        createNewTeamWithUser={this.createNewTeamWithUser}
      />
    );
  }
}
MatchScreenLoadingContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  noMatch: PropTypes.bool.isRequired,
  tempData: PropTypes.object,
  navigation: PropTypes.object.isRequired
};
MatchScreenLoadingContainer.defaultProps = {
  tempData: {}
};

const mapStateToProps = state => ({
  loading: state.teams.isLoading,
  error: state.teams.error,
  noMatch: state.teams.noMatch,
  tempData: state.teams.tempData
});

export default connect(mapStateToProps)(MatchScreenLoadingContainer);
