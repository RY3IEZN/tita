/** @format */

import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Font } from "expo";
import { useFonts } from "expo-font";

function AppText({
  theText,
  fontSize,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  textDecorationLine,
  fontFamily = "poppins",
}) {
  const [loaded] = useFonts({
    poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
    Montserrat: require("../../../assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Text
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        textAlign: textAlign,
        lineHeight: lineHeight,
        textDecorationLine: textDecorationLine,
      }}
    >
      {theText}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppText;
