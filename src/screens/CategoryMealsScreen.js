import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  const availableMeals = useSelector(
    (state) => state.mealsReducer.filteredMeals
  );

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  navigation.setOptions({
    headerTitle: title,
  });

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe check your filters? </DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
