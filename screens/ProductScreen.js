import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Product Screen</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
