import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";

import CompStack from "./stacks/CompStack";
import TeamsStack from "./stacks/TeamsStack";
import ProfileStack from "./stacks/ProfileStack";
import TabBarIcon from "../../components/TabBarIcon";

export default TabNavigator(
  {
    Competitions: {
      screen: CompStack
    },
    Teams: {
      screen: TeamsStack
    },
    Profile: {
      screen: ProfileStack
    }
  },
  {
    initialRouteName: "Competitions",
    navigationOptions: ({ navigation }) => ({
      /* eslint-disable-next-line */
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        return (
          <TabBarIcon
            routeName={routeName}
            color={focused ? "black" : "grey"}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      style: {
        height: 60
      }
    }
  }
);
