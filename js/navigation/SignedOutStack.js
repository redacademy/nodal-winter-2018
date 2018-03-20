import React from "react";
import { StackNavigator } from "react-navigation";

import Landing from "../screens/Landing";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import SignUpWorkStyle from "../screens/SignUpWorkStyle";

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
    },
    SignUpWorkStyle: {
      screen: SignUpWorkStyle
    }
  },
  {
    initialRouteName: "Landing",
    headerMode: "screen"
  }
);
