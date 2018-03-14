import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { colors } from "../../config/styles";
import Button from "../Button";
import celebrateImage from "../../assets/images/onboarding/celebration-girl.png";
const LandingComponent = ({ navigateToSignIn, navigateToSignUp }) => (
  <View style={styles.landingContainer}>
    <Image style={styles.image} source={celebrateImage} />
    <Text style={styles.heading}>GET READY TO COMPETE!</Text>
    <View style={styles.landingOptions}>
      <Button
        color={colors.coralOrange}
        text="SIGN UP"
        func={() => {
          navigateToSignUp();
        }}
      />
      <TouchableHighlight
        underlayColor={colors.borealisGreen}
        style={styles.landingSignInWrapper}
        onPress={() => {
          navigateToSignIn();
        }}
      >
        <View style={styles.landingSignInBorder}>
          <Text style={styles.landingSignIn}>I already have an account.</Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);
LandingComponent.propTypes = {
  navigateToSignIn: PropTypes.func.isRequired,
  navigateToSignUp: PropTypes.func.isRequired
};
export default LandingComponent;
