//todo : replace this with the Teams/messaging stack when complete next week. requires a placeholder for now.

import React from "react";
import { StackNavigator } from "react-navigation";

import Landing from "../../../screens/Landing";
import SignIn from "../../../screens/SignIn";
import SignUp from "../../../screens/SignUp";

export default StackNavigator(
  {
    Landing: {
      screen: Landing
    },
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "Landing",
    headerMode: "screen"
  }
);
