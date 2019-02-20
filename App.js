import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import Home from "./components/Home/home";
import Setting from "./components/Setting/setting";
import Content from "./components/ContentDrawer/content";
import Swipe from "./components/Swipe/swipe";

const { width } = Dimensions.get("window");
const BottomNavigation = createBottomTabNavigator({
  Home: Home,
  Setting: Setting,
  Swipe: Swipe
});

const DrawerContainer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Setting: { screen: Setting }
  },
  {
    contentComponent: Content,
    drawerWidth: (width * 2) / 3
  }
);

const StackNavigator = createStackNavigator({
  Home: { screen: Home },
  Setting: { screen: Setting }
});

const AppContainer = createAppContainer(BottomNavigation);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
