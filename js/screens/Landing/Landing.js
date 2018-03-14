import React from "react";
import PropTypes from "prop-types";

import LandingComponent from "../../components/LandingComponent";
import Onboarding from "../../components/Onboarding";

const Landing = ({ onboarding }) =>
  onboarding ? <Onboarding /> : <LandingView />;

Landing.propTypes = {
  onboarding: PropTypes.bool.isRequired
};
export default Landing;
