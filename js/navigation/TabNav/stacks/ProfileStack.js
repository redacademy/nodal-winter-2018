import { StackNavigator } from "react-navigation";

import Profile from "../../../screens/Profile";
import EditProfile from "../../../screens/EditProfile";

export default StackNavigator(
  {
    Profile: {
      screen: Profile
    },
    EditProfile: {
      screen: EditProfile
    }
  },
  {
    initialRouteName: "Profile",
    headerMode: "screen",
    mode: "modal"
  }
);
