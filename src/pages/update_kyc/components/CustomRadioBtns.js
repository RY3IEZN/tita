/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import AppText from "../../components/AppText";

function CustomRadioBtns({ radioBtnText, value, status, onPress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <RadioButton value={value} status={status} onPress={onPress} />
      <AppText theText={radioBtnText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CustomRadioBtns;
