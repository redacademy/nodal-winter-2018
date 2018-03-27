import { StackNavigator } from "react-navigation";

import OtherUserProfile from "../../../screens/OtherUserProfile/";
import TeamUsers from "../../../screens/TeamUsers";

export default StackNavigator(
  {
    OtherUserProfile: {
      screen: OtherUserProfile
    },
    TeamUsers: {
      screen: TeamUsers
    }
  },
  {
    initialRouteName: "OtherUserProfile",
    headerMode: "screen"
  }
);
