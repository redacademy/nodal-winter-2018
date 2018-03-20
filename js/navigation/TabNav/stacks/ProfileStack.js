import { StackNavigator } from "react-navigation";

import Profile from "../../../screens/Profile";

export default StackNavigator(
  {
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Profile",
    headerMode: "modal"
  }
);
