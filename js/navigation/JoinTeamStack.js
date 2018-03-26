import { StackNavigator } from "react-navigation";

import Loading from "../screens/MatchScreenLoading";
import JoinTeamModal from "../screens/JoinTeamModal";

export default StackNavigator(
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
