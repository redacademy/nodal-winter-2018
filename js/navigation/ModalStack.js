import { StackNavigator } from "react-navigation";

import TabNav from "./TabNav";
import Loading from "../screens/MatchScreenLoading";
import JoinTeamModal from "../screens/JoinTeamModal";

export default StackNavigator(
  {
    TabNav: {
      screen: TabNav,
      navigationOptions: {
        header: null
      }
    },
    JoinTeamModal: {
      screen: JoinTeamModal
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
