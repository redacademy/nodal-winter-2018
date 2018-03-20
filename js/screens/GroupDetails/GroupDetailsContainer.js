import React, { Component } from "react";

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
    title: "TEAM PLACEHOLDER",
    ...headerBarStyle(navigation),
    headerLeft: null
  });

  asyncFetchUserList() {
    firebaseDB
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const list = this.state.list;
          list.push(doc.data());
          this.setState({ list });
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  componentDidMount() {
    this.asyncFetchUserList();
  }
  render() {
    return <GroupDetails list={this.state.list} />;
  }
}

export default GroupDetailsContainer;
