import { StackNavigator } from "react-navigation";

import CompetitionCategory from "../../../screens/CompetitionCategory";
import CompetitionList from "../../../screens/CompetitionList";
import Competition from "../../../screens/Competition";
import Matches from "../../../screens/Matches";
import Teams from "../../../screens/GroupDetails";
import User from "../../../screens/OtherUserProfile";

export default StackNavigator(
  {
    CompetitionCategory: {
      screen: CompetitionCategory
    },
    CompetitionList: {
      screen: CompetitionList
    },
    Competition: {
      screen: Competition
    },
    Matches: {
      screen: Matches
    },
    GroupDetailsC: {
      screen: Teams
    },
    UserC: {
      screen: User
    }
  },
  {
    initialRouteName: "CompetitionCategory",
    headerMode: "screen"
  }
);
