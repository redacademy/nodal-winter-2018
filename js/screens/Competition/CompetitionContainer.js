import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  fetchBestMatch,
  fetchOtherMatches,
  addUserToTeam
} from "../../redux/modules/teams";
import { fetchUserWorkstyle } from "../../redux/modules/user";
import { getUserScore } from "../../redux/modules/user";

import Competition from "./Competition";
import { headerBarStyle } from "../../config/styles";

class CompetitionContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data.category.toUpperCase(),
    ...headerBarStyle(navigation)
  });

  constructor() {
    super();
    this.findBestMatch = this.findBestMatch.bind(this);
    this.findOtherMatches = this.findOtherMatches.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  async findBestMatch(teamSize) {
    await this.props.dispatch(fetchUserWorkstyle());
    //TODO: change the user score to dynamic values
    await this.props.dispatch(getUserScore([4, 1, 5]));

    await this.props.dispatch(
      fetchBestMatch(
        this.props.userWorkstyle,
        this.props.userScore,
        this.props.navigation.state.params.data.id,
        teamSize
      )
    );
  }

  async findOtherMatches() {
    if (
      this.props.userWorkstyle === undefined ||
      this.props.userScore === undefined
    ) {
      await this.props.dispatch(fetchUserWorkstyle());
      //TODO: change the user score to dynamic values
      await this.props.dispatch(getUserScore([1, 4, 5]));
    }

    await this.props.dispatch(
      fetchOtherMatches(
        this.props.userWorkstyle,
        this.props.userScore,
        this.props.navigation.state.params.data.id,
        false
      )
    );
  }

  async addUser() {
    //TODO: change the user score to dynamic values
    await this.props.dispatch(getUserScore([1, 4, 5]));

    const uid = await AsyncStorage.getItem("user");
    this.props.dispatch(
      addUserToTeam(this.props.userScore, this.props.teamId, uid)
    );
  }

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
