import { StackNavigator } from "react-navigation";
import OtherUserProfile from "../../../screens/OtherUserProfile/";

export default StackNavigator(
  {
    OtherUserProfile: {
      screen: OtherUserProfile
    }
  },
  {
    initialRouteName: "OtherUserProfile",
    headerMode: "screen"
  }
);
