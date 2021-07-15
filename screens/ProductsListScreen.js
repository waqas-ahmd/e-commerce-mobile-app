import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Product List Screen</Text>
    </SafeAreaView>
  );
};

export default ProductsListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
