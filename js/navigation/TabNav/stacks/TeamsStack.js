import { StackNavigator } from "react-navigation";

import OtherUserProfile from "../../../screens/OtherUserProfile/";
import MyTeams from "../../../screens/Teams";
import Teams from "../../../screens/GroupDetails";
import User from "../../../screens/OtherUserProfile/OtherUserProfileContainer";

export default StackNavigator(
  {
    OtherUserProfile: {
      screen: OtherUserProfile
    },
    MyTeams: {
      screen: MyTeams
    },
    GroupDetails: {
      screen: Teams
    },
    User: {
      screen: User
    }
  },
  {
    initialRouteName: "MyTeams",
    headerMode: "screen"
  }
);
