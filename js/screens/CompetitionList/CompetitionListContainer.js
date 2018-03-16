import React, { Component } from "react";
import { View, Text } from "react-native";

import { firebaseDB } from "../../config/firebaseConfig";
import CompetitionList from "./CompetitionList";
import { competitionValidation } from "../../helpers/timestampHelpers";

class CompetitionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.asyncFetchCompList = this.asyncFetchCompList.bind(this);
  }

  asyncFetchCompList(param) {
    const query = param
      ? firebaseDB.collection("competitions").where("category", "==", param)
      : firebaseDB.collection("competitions");
    query
      .get()
      .then(snapshot => {
        snapshot.forEach(competition => {
          const list = this.state.list;
          if (competitionValidation(competition.data().startTime)) {
            list.push(competition.data());
            this.setState({ list });
          }
        });
      })
      .catch(err => console.log("query competition error: ", err));
  }

  componentDidMount() {
    // TODO: Change this param to dynamic, once navigation is set up
    const param = "";

    this.asyncFetchCompList(param);
  }
  render() {
    console.log(this.state.list);
    return <CompetitionList list={this.state.list} />;
  }
}

export default CompetitionListContainer;

