/** @format */

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Spacer from "../components/Spacer";
import AppSoftCards from "../components/AppSoftCards";

const { width, height } = Dimensions.get("screen");

function AddMoneyPage(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: height * 0.08,
          width: width * 0.9,
          backgroundColor: "white",
          borderRadius: 20,
          elevation: 5,
          shadowColor: "grey",
          shadowOpacity: 0.5,
          flexDirection: "row",
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowRadius: 10,
        }}
      >
        <View style={{}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default AddMoneyPage;
