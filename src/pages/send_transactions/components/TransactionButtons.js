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

function TransactionButtons({ onPress, AppBtnText }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.appBtn}>
        <LinearGradient
          colors={
            AppBtnText == "View Details"
              ? ["#3862F8", "#1740FF"]
              : ["#eaedfa", "#eaedfa"]
          }
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.appBtn}
        >
          <AppText
            theText={AppBtnText}
            color={AppBtnText == "View Details" ? "white" : "blue"}
            fontWeight={"600"}
            fontSize={16}
          />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  appBtn: {
    height: height * 0.09,
    width: width * 0.4,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
  },
  appBtnText: {
    color: "white",
    // fontFamily: "lato",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransactionButtons;
