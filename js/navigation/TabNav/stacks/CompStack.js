import { StackNavigator } from "react-navigation";

import CompetitionCategory from "../../../screens/CompetitionCategory";
import CompetitionList from "../../../screens/CompetitionList";
import Competition from "../../../screens/Competition";
import Matches from '../../../screens/Matches/';

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
    }
  },
  {
    initialRouteName: "CompetitionCategory",
    headerMode: "screen"
  }
);
