import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import React, { useContext } from "react";

import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import MyCards from "./MyCards";
import Statistics from "./Statistics";
import { ThemeProvider, ThemeContext } from "./ThemeContext";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={MyCards}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="creditcard"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="pie-chart"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
