/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ElectricityAppPicker = ({ selectedValue, onValueChange }) => {
  const [selectedContinent, setSelectedContinent] = useState("Please select");

  const discos = [
    "Please select",
    "Abuja Electricity Distribution Company (AEDC)",
    "Benin Electricity Distribution Company (BEDC)",
    "Eko Electricity Distribution Company (EKEDC)",
    "Enugu Electricity Distribution Company (EEDC)",
    "Ibadan Electricity Distribution Company (IBEDC)",
    "Ikeja Electricity Distribution Company (IKEDC)",
    "Jos Electricity Distribution Company (JEDC)",
    "Kaduna Electricity Distribution Company (KAEDCO)",
    "Kano Electricity Distribution Company (KEDCO)",
    "Port Harcourt Electricity Distribution Company (PHEDC)",
  ];

  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {discos.map((discos, index) => (
          <Picker.Item key={index} label={discos} value={discos} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    height: 60,
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default ElectricityAppPicker;
