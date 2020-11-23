import React from "react";
import { View, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";

const ListItem = ({ children }) => {
  return (
    <View style={styles.litsItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  litsItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default ListItem;
