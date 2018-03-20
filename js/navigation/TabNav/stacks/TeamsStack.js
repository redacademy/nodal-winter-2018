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
