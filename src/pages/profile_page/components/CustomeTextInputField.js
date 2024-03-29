/** @format */

import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function CustomeTextInputField({
  inputTitle,
  inputfieldIcon,
  TextinputTitle,
  onChangeText,
  keyboardType,
}) {
  return (
    <>
      <Text style={styles.textInputName}>{inputTitle}</Text>
      <View style={styles.textInputBox}>
        <View style={{ marginHorizontal: 5 }}>
          <MaterialCommunityIcons
            name={inputfieldIcon}
            size={24}
            color="#4361EE"
          />
        </View>
        <TextInput
          placeholder={TextinputTitle}
          style={{ width: width * 0.75 }}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputName: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "left",
    alignItems: "stretch",
  },
  textInputBox: {
    height: 55,
    width: width * 0.9,
    borderRadius: 15,
    borderColor: "black",
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default CustomeTextInputField;
