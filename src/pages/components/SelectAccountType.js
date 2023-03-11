/** @format */

import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";
import React, { useState } from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Spacer from "./Spacer";

function SelectAccountType({ imgSrc, accountType }) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "red",
          justifyContent: "space-between",
          marginHorizontal: 10,
          alignItems: "center",
          marginTop: 10,
          width: 300,
        }}
      >
        {/* the icon and text */}
        <View style={{ flexDirection: "row" }}>
          <Image source={imgSrc} />
          <Spacer width={10} />
          <View>
            <AppText theText={accountType} />
            <AppText theText={"xxx234"} />
          </View>
        </View>
        <ExpoCheckbox
          value={isChecked}
          color={isChecked ? "#4630EB" : undefined}
          style={{ borderRadius: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SelectAccountType;
