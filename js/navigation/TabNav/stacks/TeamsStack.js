import { StackNavigator } from "react-navigation";

import OtherUserProfile from "../../../screens/OtherUserProfile/";
import TeamUsers from "../../../screens/TeamUsers";
import Teams from "../../../screens/GroupDetails";
import User from "../../../screens/OtherUserProfile/OtherUserProfileContainer";

export default StackNavigator(
  {
    OtherUserProfile: {
      screen: OtherUserProfile
    },
    MyTeams: {
      screen: TeamUsers
    },
    GroupDetails: {
      screen: Teams
    },
    Users: {
      screen: User
    }
  },
  {
    initialRouteName: "OtherUserProfile",
    headerMode: "screen"
  }
);
