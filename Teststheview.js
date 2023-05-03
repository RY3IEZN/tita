/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  picker: {
    width: "90%",
    height: 40,
    paddingLeft: 10,
  },
});

const DropDownMenu = () => {
  const [selectedValue, setSelectedValue] = useState("item1");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
        mode="dropdown"
      >
        <Picker.Item label="Item 1" value="item1" />
        <Picker.Item label="Item 2" value="item2" />
        <Picker.Item label="Item 3" value="item3" />
      </Picker>
    </View>
  );
};

export default DropDownMenu;
