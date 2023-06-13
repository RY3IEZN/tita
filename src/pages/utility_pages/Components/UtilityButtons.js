/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import AppText from "../../components/AppText";

const { width, height } = Dimensions.get("screen");

function UtilityButtons({ onPress, AppBtnText, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.appBtn}>
        <LinearGradient
          colors={
            color == "blue" ? ["#3862F8", "#1740FF"] : ["#f4f4f4", "#f4f4f4"]
          }
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.appBtn}
        >
          <AppText
            theText={AppBtnText}
            color={color == "blue" ? "white" : "blue"}
            fontWeight={"600"}
            fontSize={14}
          />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  appBtn: {
    height: height * 0.07,
    width: width * 0.4,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
    elevation: 1,
    shadowColor: "white",
  },
  appBtnText: {
    color: "white",
    // fontFamily: "lato",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UtilityButtons;
