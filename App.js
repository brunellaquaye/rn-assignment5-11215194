import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import MyCards from "./MyCards";
import Statistics from "./Statistics";
import { ThemeProvider } from "./ThemeContext";

const greyColor = "#808080";
const mainColor = "#2196F3";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign 
              name="home" 
              size={24} 
              color={focused ? mainColor : greyColor} />
            ),
          }}
        />

        <Tab.Screen
          name="My Cards"
          component={MyCards}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
            
              <AntDesign name="creditcard" size={24} color={focused ? mainColor : greyColor} />
            ),
           
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{ headerShown: false,
            tabBarIcon: ({ focused }) => (
            
            <Feather name="pie-chart" size={24} color={focused ? mainColor : greyColor} />
          ), }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{ headerShown: false,
          tabBarIcon: ({focused}) => (
            <AntDesign name="setting" size={24} color={focused? mainColor : greyColor} />
          ) }}
        />
      </Tab.Navigator>
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
