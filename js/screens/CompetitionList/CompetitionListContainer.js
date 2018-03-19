import React, { Component } from "react";
import PropTypes from "prop-types";

import { firebaseDB } from "../../config/firebaseConfig";
import CompetitionList from "./CompetitionList";
import { competitionValidation } from "../../helpers/timestampHelpers";
import { headerBarStyle } from "../../config/styles";

class CompetitionListContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.category.toUpperCase() || "COMPETITION",
    ...headerBarStyle(navigation)
    // headerLeft: null
  });
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
    // const param = "";
    console.log(this.props.navigation.state.params);
    const { params } = this.props.navigation.state;

    this.asyncFetchCompList(params.category);
  }
  render() {
    console.log(this.state.list);
    return (
      <CompetitionList
        list={this.state.list}
        navigation={this.props.navigation}
      />
    );
  }
}

export default CompetitionListContainer;

CompetitionListContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
