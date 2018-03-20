import { StackNavigator } from "react-navigation";

import CompetitionCategory from "../../../screens/CompetitionCategory";
import CompetitionList from "../../../screens/CompetitionList";
import Competition from "../../../screens/Competition";

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
    }
  },
  {
    initialRouteName: "CompetitionCategory",
    headerMode: "screen"
  }
);
