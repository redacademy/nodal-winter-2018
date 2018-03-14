import React from "react";
import { StackNavigator } from "react-navigation";

import CompetitionCategory from "../../../screens/CompetitionCategory";

export default StackNavigator(
  {
    CompetitionCategory: {
      screen: CompetitionCategory
    }
  },
  {
    initialRouteName: "CompetitionCategory",
    headerMode: "screen"
  }
);
