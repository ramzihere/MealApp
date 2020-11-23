import React from "react";
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MealsStackNavigator, FavStackNavigator } from "./MealsStackNavigators";

import Colors from "../constants/Colors";

const platformAndroid = Platform.OS === "android";

const Tab = platformAndroid
  ? createMaterialBottomTabNavigator()
  : createBottomTabNavigator();

const MealsTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="white"
      shifting
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: { fontFamily: "open-sans-bold" },
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarLabel: platformAndroid ? (
            <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
          ) : (
            "Meals"
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-restaurant" size={25} color={color} />
          ),
          tabBarColor: Colors.primaryColor,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavStackNavigator}
        options={{
          tabBarLabel: platformAndroid ? (
            <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
          ) : (
            "Favorites"
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-star" size={25} color={color} />
          ),
          tabBarColor: Colors.accentColor,
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigator;
