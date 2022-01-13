import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
  BottomTabBarHeightContext,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
} from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
import { cardBg, mainColor } from "../DeliveryColors";
import Profile from "../views/Profile";
import HomeScreen from "../views/HomeScreen";
import BookingScreen from "../views/BookingScreen";
import { BlurView } from "expo-blur";

const MyBottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
        },
        tabBarActiveTintColor: mainColor,
        headerShown: false,
        tabBarInactiveTintColor: "#485563",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="envelope-open-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: "Booking",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTabNav;
