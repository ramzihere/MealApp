import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { FiltersStackNavigator } from "./MealsStackNavigators";
import MealsTabNavigator from "./MealsTabNavigator";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const MealsDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Drawer.Screen name="Meals" component={MealsTabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersStackNavigator} />
    </Drawer.Navigator>
  );
};

export default MealsDrawerNavigator;
