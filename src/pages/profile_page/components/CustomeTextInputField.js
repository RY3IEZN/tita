/** @format */

import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function CustomeTextInputField({ inputTitle, inputfieldIcon, TextinputTitle }) {
  return (
    <>
      <Text style={styles.textInputName}>{inputTitle}</Text>
      <View style={styles.textInputBox}>
        <View style={{ marginHorizontal: 10 }}>
          <MaterialCommunityIcons
            name={inputfieldIcon}
            size={24}
            color="#4361EE"
          />
        </View>
        <TextInput
          placeholder={TextinputTitle}
          style={{ width: width * 0.75 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputName: { marginTop: 10, fontWeight: "500", fontSize: 15 },
  textInputBox: {
    height: 55,
    width: width * 0.8,
    borderRadius: 15,
    borderColor: "black",
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default CustomeTextInputField;
