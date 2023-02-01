/** @format */

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

function CustomCreditCard(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <View
      style={{
        height: height * 0.2,
        width: width * 0.85,
        borderRadius: 25,
        backgroundColor: "white",
        marginHorizontal: 10,
        marginTop: 10,
        elevation: 10,
        shadowColor: "#3862F8",
        shadowOpacity: 0.5,
        flexDirection: "row",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <RadioButton
        color="#3862F8"
        uncheckedColor="grey"
        value={false}
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CustomCreditCard;
