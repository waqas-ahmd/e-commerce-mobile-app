import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WishListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>WishList Screen</Text>
    </SafeAreaView>
  );
};

export default WishListScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
