import React from "react";
import { SwitchNavigator } from "react-navigation";

import SignedIn from "./TabNav";
import SignedOut from "./SignedOutStack";
import Authentication from "./Authentication";

export default SwitchNavigator(
  {
    SignedOut: {
      screen: SignedOut
    },
    SignedIn: {
      screen: SignedIn
    },
    Authentication: {
      screen: Authentication
    }
  },
  {
    initialRouteName: "Authentication"
  }
);
