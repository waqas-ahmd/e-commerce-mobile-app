import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Cart Screen</Text>
    </SafeAreaView>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
