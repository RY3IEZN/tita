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

function ModalAppButton({ onPress, ModalAppButtonText }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalAppBtn}>
        <LinearGradient
          colors={["#3862F8", "#1740FF"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.modalAppBtn}
        >
          <Text style={styles.modalAppBtnText}>{ModalAppButtonText}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalAppBtn: {
    height: 55,
    width: width * 0.5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
  },
  modalAppBtnText: {
    color: "white",
    // fontFamily: "lato",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ModalAppButton;
