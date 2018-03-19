import React, { Component } from "react";
import PropTypes from "prop-types";
import EditProfile from "./EditProfile";
import { Image, View } from "react-native";
import { styles } from "./styles";

class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  render() {
    const { loading } = this.props;

    return loading ? (
      <View style={styles.loadinggif}>
        <Text>Loading</Text>
      </View>
    ) : (
      <EditProfile user={this.state.user} />
    );
  }
}

EditProfileContainer.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default EditProfileContainer;
