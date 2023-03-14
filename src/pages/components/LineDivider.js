/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

function LineDivider(props) {
  return (
    <View
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "black",
        borderColor: "grey",
      }}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LineDivider;
