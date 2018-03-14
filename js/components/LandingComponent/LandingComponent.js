import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import styles from "./styles";
import { colors } from "../../config/styles";
import Button from "../Button";
import celebrateImage from "../../assets/images/onboarding/celebration-girl.png";
const LandingComponent = () => (
  <View style={styles.landingContainer}>
    <Image style={styles.image} source={celebrateImage} />
    <Text style={styles.heading}>GET READY TO COMPETE!</Text>
    <View style={styles.landingOptions}>
      <Button
        color={colors.coralOrange}
        text="SIGN UP"
        func={() => {
          //todo
        }}
      />
      <TouchableHighlight
        underlayColor={colors.borealisGreen}
        style={styles.landingSignInWrapper}
        onPress={() => {
          //todo
        }}
      >
        <View style={styles.landingSignInBorder}>
          <Text style={styles.landingSignIn}>I already have an account.</Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

export default LandingComponent;
