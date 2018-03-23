import { StackNavigator } from "react-navigation";

import TabNav from "./TabNav";
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
    }
  },
  {
    initialRouteName: "TabNav",
    headerMode: "screen",
    mode: "modal"
  }
);
