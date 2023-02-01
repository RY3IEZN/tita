/** @format */

import React from "react";
import { View, StyleSheet, imageSource, Text } from "react-native";
import AppSoftButton from "../../components/AppSoftButton";

function ProfileBtn1({ title1, title2, imageSource, onPress }) {
  return (
    <View>
      <AppSoftButton onPress={onPress} source={imageSource} />
      <View style={{ alignItems: "center" }}>
        <Text>{title1}</Text>
        <Text>{title2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileBtn1;
