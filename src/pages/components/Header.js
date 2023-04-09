/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "./AppText";

function Header({ headerTitle, fontSize = 30 }) {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <AppText
        theText={headerTitle}
        fontSize={fontSize}
        fontWeight={"700"}
        color={"#3862F8"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Header;
