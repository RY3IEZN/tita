/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function CustomeTextInputField2({
  inputTitle = "",
  inputfieldIcon,
  visible,
  placeholder,
  img,
  onChangeText,
  keyboardType,
}) {
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
          <Image
            source={img}
            style={{ width: 20, height: 20, marginBottom: 30 }}
          />
        </View>
        <TextInput
          placeholder={placeholder}
          style={{ width: width * 0.75 }}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
        {visible ? <MaterialCommunityIcons name="lock" /> : ""}
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
    marginHorizontal: 20,
    color: "#4361EE",
  },
  textInputBox: {
    height: 30,
    width: width * 0.8,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 20,
  },
});

export default CustomeTextInputField2;
