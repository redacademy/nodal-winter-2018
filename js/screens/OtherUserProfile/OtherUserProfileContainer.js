import React, { Component } from "react";
import { View } from "react-native";
import OtherUserProfile from "./OtherUserProfile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { headerBarStyle } from "../../config/styles";
import { fetchOtherUser } from "../../redux/modules/user";
import Loading from "../../components/Loading";

import { styles } from "./styles";

class OtherUserProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "USER PROFILE",
    ...headerBarStyle(navigation)
  });

  componentDidMount() {
    this.props.dispatch(fetchOtherUser("u1S6v0sfhfSQZAjSrCdOar0SSA52"));
  }

  render() {
    return (
      <View style={styles.background}>
        {this.props.isLoading ? (
          <Loading />
        ) : (
          <OtherUserProfile user={this.props.user} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.user.isLoading,
  user: state.user.users["u1S6v0sfhfSQZAjSrCdOar0SSA52"]
});

OtherUserProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};
OtherUserProfileContainer.defaultProps = {
  user: {}
};

export default connect(mapStateToProps)(OtherUserProfileContainer);
