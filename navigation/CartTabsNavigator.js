import "react-native-gesture-handler";
import * as React from "react";
import WishListScreen from "../screens/WishListScreen";
import CartScreen from "../screens/CartScreen";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { PRIMARY_COLOR } from "../constants/colors";

const TopTab = createMaterialTopTabNavigator();

export const CartNavigator = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        indicatorStyle: { backgroundColor: PRIMARY_COLOR },
      }}
    >
      <TopTab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="shopping-cart"
                size={24}
                color={focused ? PRIMARY_COLOR : `${PRIMARY_COLOR}77`}
              />
            </View>
          ),
        }}
      />
      <TopTab.Screen
        name="wishlist"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="heart"
                size={24}
                color={focused ? PRIMARY_COLOR : `${PRIMARY_COLOR}77`}
              />
            </View>
          ),
        }}
      />
    </TopTab.Navigator>
  );
};
