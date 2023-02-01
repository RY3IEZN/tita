/** @format */

import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

function UtilityButtons({ utilityBtnTitle, tileColor, imageSource, onPress }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 70,
          width: 70,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: tileColor,
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Image source={imageSource} />
      </TouchableOpacity>
      <Text style={{ textAlign: "center" }}>{utilityBtnTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UtilityButtons;
