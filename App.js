import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import MyCards from './MyCards';
import Statistics from './Statistics';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} options = {{headerShown:false}}/>
  
      <Tab.Screen name="My Cards" component={MyCards} options = {{headerShown:false}} />
      <Tab.Screen name="Statistics" component={Statistics} options = {{headerShown:false}} />
      <Tab.Screen name="Settings" component={SettingScreen} options = {{headerShown:false}} />
    </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

