import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import QuickLinksScreen from "./screens/QuickLinksScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3fa34d",
        tabBarInactiveTintColor: "#5bba6f",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={21} />
          ),
        }}
      />
      <Tab.Screen
        name="QuickLinksScreen"
        component={QuickLinksScreen}
        options={{
          title: "Links",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
