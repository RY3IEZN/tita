/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import AppText from "../../components/AppText";

function CustomRadioBtns({ radioBtnText }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <RadioButton />
      <AppText theText={radioBtnText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CustomRadioBtns;
