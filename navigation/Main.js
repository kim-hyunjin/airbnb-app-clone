import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ExploreContainer from "../screens/Main/Explore/index";
import SavedContainer from "../screens/Main/Saved/index";
import MapScreen from "../screens/Main/Map";
import Profile from "../screens/Main/Profile";
import colors from "../colors";
import utils from "../utils";
import Room from "../screens/Main/Room";

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => (
  <TabsNavigator.Navigator
    tabBarOptions={{
      activeTintColor: colors.red,
      tabStyle: {
        paddingTop: 10,
      },
      labelStyle: {
        textTransform: "uppercase",
        fontWeight: "600",
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const isAndroid = utils.isAndroid();
        let iconName = `${isAndroid ? "md-" : "ios-"}`;
        if (route.name === "Explore") {
          iconName += "search";
        } else if (route.name === "Saved") {
          iconName += "heart";
        } else if (route.name === "Map") {
          iconName += "map";
        } else if (route.name === "Profile") {
          iconName += "person";
        }
        return (
          <Ionicons
            name={iconName}
            size={24}
            color={focused ? colors.red : "grey"}
          />
        );
      },
    })}
  >
    <TabsNavigator.Screen
      name="Explore"
      component={ExploreContainer}
    ></TabsNavigator.Screen>
    <TabsNavigator.Screen
      name="Saved"
      component={SavedContainer}
    ></TabsNavigator.Screen>
    <TabsNavigator.Screen
      name="Map"
      component={MapScreen}
    ></TabsNavigator.Screen>
    <TabsNavigator.Screen
      name="Profile"
      component={Profile}
    ></TabsNavigator.Screen>
  </TabsNavigator.Navigator>
);

const MainNavigator = createStackNavigator();
export default () => (
  <MainNavigator.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <MainNavigator.Screen name="RoomDetail" component={Room} />
  </MainNavigator.Navigator>
);
