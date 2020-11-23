import React from "react";
import { FlatList } from "react-native";

import { HeaderLeftButton } from "../navigation/HeaderButtons";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", {
            id: item.id,
            title: item.title,
          });
        }}
      />
    );
  };

  navigation.setOptions({
    headerTitle: "Meal Categories",
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

  return (
    <FlatList
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoriesScreen;
