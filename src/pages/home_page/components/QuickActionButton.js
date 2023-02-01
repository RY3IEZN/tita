/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HomeSoftButtons from "./HomeSoftButtons";

function QuickActionButton({ title1, onPress, imageSource }) {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <HomeSoftButtons onPress={onPress} source={imageSource} />
        <Text>{title1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default QuickActionButton;
