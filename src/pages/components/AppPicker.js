/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Spacer from "./Spacer";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("screen");

function AppPicker({
  label1,
  value1,
  label2,
  value2,
  onValueChange,
  defaultTitle,
}) {
  //   const [selectedValue, setSelectedValue] = useState("Transfer type");
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleValueChange = (value) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <View
      style={{
        height: 60,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 2,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "white",
            height: 50,
            width: width * 0.85,
            elevation: 1,
            //   shadowColor: "red",
          }}
        >
          <Picker
            // selectedValue={selectedValue}
            // onValueChange={(itemValue) => {
            //   setSelectedValue(itemValue);
            //   console.log(itemValue);
            // }}
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            style={styles.picker}
            itemStyle={
              selectedValue === "item1" ? styles.pickerSelected : styles.picker
            }
          >
            <Picker.Item label={defaultTitle} value="default" />
            <Picker.Item label={label1} value={value1} />
            <Picker.Item label={label2} value={value2} />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  picker: {
    borderRadius: 10,
    color: "black",
    // marginHorizontal: 20,
    backgroundColor: "white",
  },
  pickerSelected: {
    backgroundColor: "white",
    color: "white",
  },
});

export default AppPicker;
