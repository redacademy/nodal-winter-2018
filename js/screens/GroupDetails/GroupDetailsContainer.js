import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";

import { fetchOtherUser } from "../../redux/modules/user";
import { headerBarStyle } from "../../config/styles";
import GroupDetails from "./GroupDetails";
import { addUserToTeam } from "../../redux/modules/teams";
import { firebaseDB } from "../../config/firebaseConfig";

import PropTypes from "prop-types";

class GroupDetailsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "TEAM NAME",
    ...headerBarStyle(navigation)
  });

  constructor({ navigation }) {
    super();
    this.isCompStack = navigation.state.params
      ? navigation.state.params.isCompStack
      : false;
    this.state = {
      teamUsers: {}
    };
  }

  fetchUsersProfile = async () => {
    // const includeMe = !this.props.navigation.state.params.isCompStack;
    //TODO: if user exists, dont use best match, use params.users
    //Remove params.users from navigation props in loading
    // const users = this.props.navigation.state.params.users;
    // if (includeMe)
    this.props.dispatch(fetchOtherUser(await AsyncStorage.getItem("user")));

    const teams = await firebaseDB
      .collection("teams")
      .doc(this.props.bestMatch.id)
      .get()
      .then(snapshot => snapshot.data())
      .catch(err => console.log(err));

    await this.setState({ teamUsers: teams.users });

    await Object.keys(teams.users).map(async user => {
      await this.props.dispatch(fetchOtherUser(user));
    });
  };

  addUser = async () => {
    const score = this.props.score;
    const uid = await AsyncStorage.getItem("user");
    await this.props.dispatch(fetchOtherUser(uid));
    console.log(this.props.bestMatch.id);
    await this.props.dispatch(
      addUserToTeam(
        score,
        this.props.bestMatch.id,
        this.props.bestMatch.competitionId,
        uid
      )
    );
  };

  async componentDidMount() {
    await this.fetchUsersProfile();
  }

  render() {
    // this.state.teamUsers
    return (
      Object.keys(this.state.teamUsers).length &&
      Object.keys(this.props.users).length && (
        <GroupDetails
          isCompStack={this.isCompStack}
          teamUsers={this.state.teamUsers}
          users={this.props.users}
          navigation={this.props.navigation}
          addUser={this.addUser}
        />
      )
    );
  }
}

const mapStateToProps = state => ({
  bestMatch: state.teams.bestMatch,
  users: state.user.users,
  score: state.user.score
  // otherMatches: state.teams.otherMatches
});

GroupDetailsContainer.propTypes = {
  bestMatch: PropTypes.object
  // otherMatches: PropTypes.array
};

GroupDetailsContainer.defaultProps = {
  bestMatch: {}
  // otherMatches: []
};

export default connect(mapStateToProps)(GroupDetailsContainer);
