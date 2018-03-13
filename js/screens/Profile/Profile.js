import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

// Styles
import { typography, containerMargin } from "../../config/styles";
import { styles } from "./styles";

// More work necessary in this file.
const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Image
        style={styles.profilePhoto}
        source={require("../../assets/images/placeholder/profile-4.jpg")}
      />
      <Text style={styles.titleText}>{"Placeholder".toUpperCase()}</Text>
      <Text style={styles.paragraphText}>Placeholder University Program</Text>
      <Text style={styles.titleText}>Workstyle</Text>
      <View style={styles.workstyleIcons}>
        <Image
          style={{ height: 80, width: 80, alignSelf: "center" }}
          source={require("../../assets/icons/workstyle/collaborative/active.png")}
        />
        <Text style={styles.workstyleText}>Collaborative</Text>
      </View>
      <Text style={styles.titleText}>{"About Me".toUpperCase()}</Text>
      <Text style={styles.paragraphText}>Description Placeholder</Text>
      <Text style={styles.titleText}>{"My Skills".toUpperCase()}</Text>
      <View>SKillsSKIllzSKIlls</View>
      <Text style={styles.titleText}>{"My Competitions".toUpperCase()}</Text>
      <View>
        <Text>Chip Placeholder</Text>
      </View>
      <Text style={styles.titleText}>{"Saved Competitions".toUpperCase()}</Text>
      <View>
        <Text style={styles.paragraphText}>StuffSTuffstuff</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
