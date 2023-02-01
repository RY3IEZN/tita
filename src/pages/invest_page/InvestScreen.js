/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function InvestScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Invest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default InvestScreen;
