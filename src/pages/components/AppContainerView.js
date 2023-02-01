/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

function AppContainerView({ children }) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  background: {
    backgroundColor: "#f6f8ff",
    flex: 1,
  },
});

export default AppContainerView;
