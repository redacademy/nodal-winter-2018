import React, { Component } from "react";
import PropTypes from "prop-types";

import { headerBarStyle } from "../../config/styles";
import JoinTeamModal from "./JoinTeamModal";
export default class JoinTeamModalContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params && navigation.state.params.title,
    ...headerBarStyle(navigation, true)
  });
  constructor() {
    super();
    this.state = {
      fun: 1,
      grow: 1,
      win: 1,
      pointsLeft: 7
    };
    this.updateFun = this.updateFun.bind(this);
    this.updateGrow = this.updateGrow.bind(this);
    this.updateWin = this.updateWin.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateFun(fun) {
    if (this.state.pointsLeft - (fun - this.state.fun) >= 0)
      this.setState({
        fun,
        pointsLeft: this.state.pointsLeft - (fun - this.state.fun)
      });
  }
  updateGrow(grow) {
    if (this.state.pointsLeft - (grow - this.state.grow) >= 0)
      this.setState({
        grow,
        pointsLeft: this.state.pointsLeft - (grow - this.state.grow)
      });
  }
  updateWin(win) {
    if (this.state.pointsLeft - (win - this.state.win) >= 0)
      this.setState({
        win,
        pointsLeft: this.state.pointsLeft - (win - this.state.win)
      });
  }

  async submit() {
    //
  }

  render() {
    return (
      <JoinTeamModal
        fun={this.state.fun}
        grow={this.state.grow}
        win={this.state.win}
        pointsLeft={this.state.pointsLeft}
        updateFun={this.updateFun}
        updateGrow={this.updateGrow}
        updateWin={this.updateWin}
        submit={this.submit}
      />
    );
  }
}
