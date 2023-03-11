/** @format */

import Checkbox from "expo-checkbox";
import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";
import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import AppText from "./src/pages/components/AppText";
import SelectAccountType from "./src/pages/components/SelectAccountType";
import ModalAccountType from "./src/pages/components/SelectAccountType";
import Spacer from "./src/pages/components/Spacer";

function Teststheview(props) {
  return (
    <View style={styles.container}>
      <SelectAccountType
        imgSrc={require("./assets/icons/titawalleticon.png")}
        accountType="TITA Account"
      />
      <SelectAccountType
        imgSrc={require("./assets/icons/savingsaccoubticon.png")}
        accountType="Savings Account"
      />
      <SelectAccountType
        imgSrc={require("./assets/icons/businessaccounticon.png")}
        accountType="Business Account"
      />
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

export default Teststheview;
