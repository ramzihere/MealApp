import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MealsDrawerNavigator from "./MealsDrawerNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MealsDrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
