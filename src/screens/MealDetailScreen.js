import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { HeaderRightButton } from "../navigation/HeaderButtons";
import ListItem from "../components/ListItem";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/mealsAction";

const MealDetailScreen = ({ navigation, route }) => {
  const { id } = route.params;

  const availableMeals = useSelector((state) => state.mealsReducer.meals);
  const favoriteMeals = useSelector(
    (state) => state.mealsReducer.favoriteMeals
  );
  const isFav = favoriteMeals.some((meal) => meal.id === id);

  const selectedMeal = availableMeals.find((meal) => meal.id === id);
  const dispatch = useDispatch();
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(id));
  };

  navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderRightButton
        icon={isFav ? "ios-star" : "ios-star-outline"}
        size={30}
        onIconPress={toggleFavoriteHandler}
      />
    ),
  });

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default MealDetailScreen;
