import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProductsListScreen from "../screens/ProductsListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { CartNavigator } from "./CartTabsNavigator";
import { PRIMARY_COLOR } from "../constants/colors";

const BottomTab = createMaterialBottomTabNavigator();

export const HomeNavigator = () => {
  return (
    <BottomTab.Navigator
      labeled={false}
      barStyle={{ backgroundColor: PRIMARY_COLOR }}
      shifting={true}
    >
      <BottomTab.Screen
        name="productsList"
        component={ProductsListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="shop"
                size={24}
                color={focused ? "#fff" : "#fff7"}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="cartTopTabs"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="shopping-cart"
                size={24}
                color={focused ? "#fff" : "#fff7"}
              />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="ios-person-circle"
                size={24}
                color={focused ? "#fff" : "#fff7"}
              />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
