/** @format */

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AddMoneyBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.outerCircle}>
        <View style={styles.innercircle1}>
          <View style={styles.innercircle2}>
            <MaterialCommunityIcons name="plus" size={20} color="#597bf8" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  outerCircle: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  innercircle1: {
    height: 65,
    width: 65,
    borderRadius: 32,
    backgroundColor: "#597bf8",
    justifyContent: "center",
    alignItems: "center",
  },
  innercircle2: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddMoneyBtn;
