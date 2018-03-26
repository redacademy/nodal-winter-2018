import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MatchScreenLoading from "./MatchScreenLoading";

class MatchScreenLoadingContainer extends Component {
  static navigationOptions = {
    header: null
  };
  componentWillReceiveProps(newProps) {
    if (newProps.error) {
      this.props.navigation.navigate("JoinTeamModal", {
        title: this.props.navigation.state.params.title,
        teamSize: this.props.navigation.state.params.teamSize,
        competitionId: this.props.navigation.state.params.competitionId
      });
    }
  }
  render() {
    return <MatchScreenLoading loading={this.props.loading} navigation={this.props.navigation}/>;
  }
}
MatchScreenLoadingContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loading: state.teams.isLoading,
  error: state.teams.error
});

export default connect(mapStateToProps)(MatchScreenLoadingContainer);
