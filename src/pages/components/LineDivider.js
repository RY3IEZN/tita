/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

function LineDivider({ height }) {
  return (
    <View
      style={{
        height: height,
        width: "100%",
        backgroundColor: "lightgrey",
        borderColor: "lightgrey",
      }}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LineDivider;
