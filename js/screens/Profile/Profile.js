import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import moment from "moment";
// import Icon from "react-native-vector-icons/Ionicons";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

// Styles
import { typography, containerMargin } from "../../config/styles";
import { styles } from "./styles";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <ScrollView style={styles.mainContainer}>
        <Image
          style={{ width: 250, height: 250, borderRadius: 125 }}
          source={{
            uri: "../../assets/images/placeholder/profile-4.jpg"
          }}
        />
        <Text>Placeholder Name</Text>
        <Text>Placeholder University Program</Text>
        <Text style={typography.fontBold}>Workstyle</Text>
        <View>
          <Text>SKillsSKIllzSKIlls</Text>
        </View>
        <Text style={typography.fontBold}>About Me</Text>
        <Text>description</Text>
        <Text style={typography.fontBold}>My Skills</Text>
        <View>SKillsSKIllzSKIlls</View>
        <Text style={typography.fontBold}>My Competitions</Text>
        <View>
          <Text>competecompetecompete</Text>
        </View>
        <Text style={typography.fontBold}>Saved Competitions</Text>
        <View>
          <Text>StuffSTuffstuff</Text>
        </View>
      </ScrollView>
    );
  }
}

// Profile.propTypes = {

// };

export default connect(mapStateToProps)(Profile);
