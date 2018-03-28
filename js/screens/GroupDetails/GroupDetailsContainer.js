import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchOtherUser } from "../../redux/modules/user";
import { headerBarStyle } from "../../config/styles";
import GroupDetails from "./GroupDetails";

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
  }

  fetchUsersProfile = async () => {
    const users = this.props.navigation.state.params.users;
    await Object.values(users).map(user => {
      this.props.dispatch(fetchOtherUser(user.id));
      console.log(user);
    });
    // console.log(users);
  };

  async componentDidMount() {
    await this.fetchUsersProfile();
  }

  render() {
    // console.log(this.props.users);
    return (
      <GroupDetails
        isCompStack={this.isCompStack}
        bestMatch={this.props.bestMatch}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = state => ({
  bestMatch: state.teams.bestMatch,
  users: state.user.users
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
