import React, { Component } from "react";
import { View } from "react-native";
import Profile from "./Profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { headerBarStyle } from "../../config/styles";
import { fetchUser } from "../../redux/modules/user";
import Loading from "../../components/Loading/";

import { styles } from "./styles";

class ProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "MY PROFILE",
    ...headerBarStyle(navigation),
    headerLeft: null
  });

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  signOut = () => {
    this.props.navigation.navigate("SignedOut", { disableOnboarding: true });
  };

  openEditProfile = () => {
    this.props.navigation.navigate("EditProfile", {
      ...this.props.user
    });
  };

  render() {
    return (
      <View style={styles.background}>
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <Profile
            openEditProfile={this.openEditProfile}
            user={this.props.user}
            signOut={this.signOut}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  user: state.user.user,
  competitions: state.competition.competitions
});

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ProfileContainer);
