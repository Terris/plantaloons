import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "../Header";
import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen";

const ROUTES = [
  {
    name: "Home",
    path: "/",
    screen: () => <HomeScreen />,
  },
  {
    name: "Settings",
    path: "/settings",
    screen: () => <SettingsScreen />,
  },
];

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: ({ scene, previous, navigation }) => (
            <Header scene={scene} previous={previous} navigation={navigation} />
          ),
        }}
      >
        {ROUTES.map((route) => (
          <Stack.Screen
            name={route.name}
            component={route.screen}
            key={route.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
