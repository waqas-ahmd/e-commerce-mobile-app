import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import * as React from "react";
import { HomeNavigator } from "./HomeTabsNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTintColor: "#fff",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name="home"
            component={HomeNavigator}
            options={{ headerShown: false, headerStatusBarHeight: 10 }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
