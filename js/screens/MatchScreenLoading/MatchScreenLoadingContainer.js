import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MatchScreenLoading from "./MatchScreenLoading";
import { getContentLoading } from "../../redux/modules/matchScreenLoading";
import { getButtonLoading } from "../../redux/modules/matchScreenLoading";

class MatchScreenLoadingContainer extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(getContentLoading());
    }, 5000);
    setTimeout(() => {
      this.props.dispatch(getButtonLoading());
    }, 5000);
  }

  render() {
    return (
      <MatchScreenLoading
        buttonLoading={this.props.buttonLoading}
        contentLoading={this.props.contentLoading}
      />
    );
  }
}
MatchScreenLoadingContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  buttonLoading: PropTypes.bool.isRequired,
  contentLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  buttonLoading: state.matchScreenLoading.buttonLoading,
  contentLoading: state.matchScreenLoading.contentLoading
});

export default connect(mapStateToProps)(MatchScreenLoadingContainer);
