import { StackNavigator } from "react-navigation";

import TabNav from "./TabNav";
import Loading from "../screens/MatchScreenLoading";
import JoinTeamStack from "./JoinTeamStack";

export default StackNavigator(
  {
    TabNav: {
      screen: TabNav,
      navigationOptions: {
        header: null
      }
    },
    JoinTeamModal: {
      screen: JoinTeamStack
    },
    Loading: {
      screen: Loading
    }
  },
  {
    initialRouteName: "TabNav",
    headerMode: "screen",
    mode: "modal"
  }
);
