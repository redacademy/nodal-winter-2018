import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchBestMatch } from "../../redux/modules/teams";
import { fetchUserWorkstyle, getUserScore } from "../../redux/modules/user";

import { headerBarStyle } from "../../config/styles";
import JoinTeamModal from "./JoinTeamModal";
class JoinTeamModalContainer extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    userWorkstyle: PropTypes.string.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params && navigation.state.params.title,
    ...headerBarStyle(navigation, true, true)
  });
  constructor() {
    super();
    this.state = {
      fun: 1,
      grow: 1,
      win: 1,
      pointsLeft: 7
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchUserWorkstyle());
  }

  updateFun = fun => {
    if (this.state.pointsLeft - (fun - this.state.fun) >= 0)
      this.setState({
        fun,
        pointsLeft: this.state.pointsLeft - (fun - this.state.fun)
      });
  };
  updateGrow = grow => {
    if (this.state.pointsLeft - (grow - this.state.grow) >= 0)
      this.setState({
        grow,
        pointsLeft: this.state.pointsLeft - (grow - this.state.grow)
      });
  };
  updateWin = win => {
    if (this.state.pointsLeft - (win - this.state.win) >= 0)
      this.setState({
        win,
        pointsLeft: this.state.pointsLeft - (win - this.state.win)
      });
  };

  findBestMatch = async () => {
    const userScore = [this.state.fun, this.state.grow, this.state.win];
    await this.props.dispatch(getUserScore(userScore));
    await this.props.dispatch(
      fetchBestMatch(
        this.props.userWorkstyle,
        userScore,
        this.props.navigation.state.params.competitionId,
        this.props.navigation.state.params.teamSize
      )
    );
  };

  render() {
    return (
      <JoinTeamModal
        error={this.props.error}
        fun={this.state.fun}
        grow={this.state.grow}
        win={this.state.win}
        pointsLeft={this.state.pointsLeft}
        updateFun={this.updateFun}
        updateGrow={this.updateGrow}
        updateWin={this.updateWin}
        findBestMatch={this.findBestMatch}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = state => ({
  userWorkstyle: state.user.workstyle,
  error: state.teams.error
});

export default connect(mapStateToProps)(JoinTeamModalContainer);
