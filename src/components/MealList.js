import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", { id: item.id });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
});

export default MealList;
