/** @format */

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

function AppSoftButton({ source, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appSoftBtn}>
      <Image source={source} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  appSoftBtn: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 10,
    elevation: 10,
    shadowColor: "#3862F8",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
  },
});

export default AppSoftButton;
