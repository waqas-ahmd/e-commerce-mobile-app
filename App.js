// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import store from "./store/store";
import MainNavigator from "./navigation/Navigator";
import { PRIMARY_COLOR } from "./constants/colors";

enableScreens();

const loadApp = () => {
  setTimeout(() => {
    return true;
  }, 2000);
};

export default function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setLoading(false)}
        onError={() => {
          console.warn("App Failed to Load");
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <MainNavigator />
    </Provider>
  );
}
