import React from "react";
import { SwitchNavigator } from "react-navigation";

import SignedIn from "./TabNav";
import SignedOut from "./SignedOutStack";

export default SwitchNavigator(
  {
    SignedOut: {
      screen: SignedOut
    },
    SignedIn: {
      screen: SignedIn
    }
  },
  {
    initialRouteName: "SignedIn"
  }
);
