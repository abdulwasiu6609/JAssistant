import React from "react";
import { View, StyleSheet } from "react-native";
import { s } from "react-native-wind";

export const App = () => {
  return <View style={[s`w-full h-full`, styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    borderRadius: 21,
  },
});