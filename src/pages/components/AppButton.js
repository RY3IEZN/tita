/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

function AppButton({ AppBtnText, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.appBtn}>
        <LinearGradient
          colors={["#3862F8", "#1740FF"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.appBtn}
        >
          <Text style={styles.appBtnText}>{AppBtnText}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  appBtn: {
    height: 55,
    width: width * 0.9,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
    elevation: 0.5,
    shadowColor: "#4361EE",
    marginBottom: 5,
  },
  appBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AppButton;
