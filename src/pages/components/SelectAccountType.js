/** @format */

import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";
import React, { useState } from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Spacer from "./Spacer";
import { TouchableOpacity } from "react-native";

function SelectAccountType({
  imgSrc,
  accountType,
  checkboxed,
  accountnumber,
  shortAccountnumber = "(123xxxx)",
  onPress,
  textColour = "grey",
}) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginHorizontal: 10,
            alignItems: "center",
            marginTop: 10,
            width: 350,
            borderRadius: 10,
            shadowColor: "white",
            elevation: 1,
          }}
        >
          {/* the icon and text */}
          <View style={{ flexDirection: "row" }}>
            <Image source={imgSrc} />
            <Spacer width={10} />
            <View>
              <View style={{ flexDirection: "row" }}>
                <AppText theText={accountType} fontSize={17} />
                <Spacer width={2} />
                <AppText theText={`${shortAccountnumber}`} fontSize={17} />
              </View>
              <AppText theText={accountnumber} color={textColour} />
            </View>
          </View>
          {checkboxed && (
            <ExpoCheckbox
              value={isChecked}
              color={isChecked ? "#4630EB" : undefined}
              style={{ borderRadius: 10 }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SelectAccountType;
