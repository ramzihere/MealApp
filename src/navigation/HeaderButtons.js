import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export const HeaderLeftButton = ({ icon, size, onIconPress }) => {
  return (
    <TouchableOpacity style={{ marginLeft: 15 }} onPress={onIconPress}>
      <Ionicons
        name={icon}
        size={size}
        color={Platform.OS === "android" ? "white" : Colors.primaryColor}
      />
    </TouchableOpacity>
  );
};

export const HeaderRightButton = ({ icon, size, onIconPress }) => {
  return (
    <TouchableOpacity style={{ marginRight: 15 }} onPress={onIconPress}>
      <Ionicons
        name={icon}
        size={size}
        color={Platform.OS === "android" ? "white" : Colors.primaryColor}
      />
    </TouchableOpacity>
  );
};
