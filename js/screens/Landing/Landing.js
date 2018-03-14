import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import LandingComponent from "../../components/LandingComponent";
import Onboarding from "../../components/Onboarding";

const Landing = ({ onboarding, navigateToSignIn, navigateToSignUp }) => (
  <View style={styles.container}>
    {onboarding ? (
      <Onboarding
        navigateToSignIn={navigateToSignIn}
        navigateToSignUp={navigateToSignUp}
      />
    ) : (
      <LandingComponent
        navigateToSignIn={navigateToSignIn}
        navigateToSignUp={navigateToSignUp}
      />
    )}
  </View>
);

Landing.propTypes = {
  onboarding: PropTypes.bool.isRequired
};
export default Landing;
