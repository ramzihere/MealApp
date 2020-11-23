import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import RootNavigator from "./src/navigation/RootNavigator";
import store from "./src/store/config";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  return (
    fontsLoaded && (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  );
}
