import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import PropTypes from "prop-types";

import CompetitionList from "./CompetitionList";
import Loading from "../../components/Loading/";
import { headerBarStyle } from "../../config/styles";
import { fetchCompetitions } from "../../redux/modules/competition";

import { styles } from "./styles";

class CompetitionListContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.category.toUpperCase() || "COMPETITION",
    ...headerBarStyle(navigation)
  });

  componentDidMount() {
    console.log(this.props.navigation.state.params);
    const { params } = this.props.navigation.state;

    this.props.dispatch(fetchCompetitions(params.category));
  }
  render() {
    console.log(this.props.competitions);
    return (
      <View style={styles.background}>
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <CompetitionList
            list={this.props.competitions}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.competition.isLoading,
  competitions: state.competition.competitions
});

export default connect(mapStateToProps)(CompetitionListContainer);

CompetitionListContainer.propTypes = {
  competitions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};
