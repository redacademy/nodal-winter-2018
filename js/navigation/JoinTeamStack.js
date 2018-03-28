import { SwitchNavigator } from "react-navigation";

import Loading from "../screens/MatchScreenLoading";
import JoinTeamModal from "../screens/JoinTeamModal";

export default SwitchNavigator(
  {
    Loading: {
      screen: Loading
    },
    JoinTeamModal: {
      screen: JoinTeamModal
    }
  },
  {
    initialRouteName: "JoinTeamModal",
    headerMode: "none"
  }
);
