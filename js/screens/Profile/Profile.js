import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

// Styles
import { typography, containerMargin } from "../../config/styles";
import { styles } from "./styles";

// This component is boilerplate
const Profile = () => (
  <ScrollView style={styles.mainContainer}>
    <View>
      <Text>StuffSTuffstuff</Text>
    </View>
  </ScrollView>
);

export default Profile;
