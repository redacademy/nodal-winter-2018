import React, { Component } from "react";
import { View, Text } from "react-native";

import { firebaseDB } from "../../config/firebaseConfig";
import { headerBarStyle } from "../../config/styles";
import GroupDetails from "./GroupDetails";

class GroupDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.asyncFetchUserList = this.asyncFetchUserList.bind(this);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Team Placeholder",
    ...headerBarStyle(navigation),
    headerLeft: null
  });

  asyncFetchUserList(param) {
    const query = param
      ? firebaseDB.collection("users").where("category", "==", param)
      : firebaseDB.collection("users");
    query
      .get()
      .then(snapshot => {
        snapshot.forEach(user => {
          const list = this.state.list;
        });
      })
      .catch(err => console.log("query user error: ", err));
  }

  componentDidMount() {
    // TODO: Change this param to dynamic, once navigation is set up
    const param = "";

    this.asyncFetchUserList(param);
  }
  render() {
    console.log(this.state.list);
    return <GroupDetails list={this.state.list} />;
  }
}

export default GroupDetailsContainer;
