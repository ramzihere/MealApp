import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { HeaderLeftButton } from "../navigation/HeaderButtons";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.mealsReducer.favoriteMeals);

  navigation.setOptions({
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderLeftButton
        icon="ios-menu"
        size={30}
        onIconPress={() => {
          navigation.toggleDrawer();
        }}
      />
    ),
  });

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some.</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
