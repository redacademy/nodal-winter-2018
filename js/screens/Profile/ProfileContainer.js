/* global require */ // This is to avoid a linting error with 'require'

import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Image, View } from "react-native";
import { styles } from "./styles";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  static route = {
    navigationBar: {
      title: "Profile",
      tintColor: "white"
      // titleStyle: { fontFamily: "Montserrat-Regular" },
    }
  };

  render() {
    const { loading } = this.props;

    return loading ? (
      <View style={styles.loadinggif}>
        {/* <Image source={require("../../assets/images/loading_blue.gif")} /> */}
      </View>
    ) : (
      <Profile user={this.state.user} />
    );
  }
}

const mapStateToProps = state => ({
  // loading: state.user.loading,
  // data: state.user.data,
  // faves: state.faves.faves
});

// ProfileContainer.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   faves: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   route: PropTypes.object.isRequired
// };

export default connect(mapStateToProps)(ProfileContainer);
