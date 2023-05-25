/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const NationalityAppPicker = ({ onValueChange, selectedValue }) => {
  const [selectedNationality, setSelectedNationality] =
    useState("Please select");

  const nationalities = [
    "Please select",
    "American",
    "British",
    "Canadian",
    "Chinese",
    "French",
    "German",
    "Indian",
    "Japanese",
    "Algerian",
    "Cameroonian",
    "Egyptian",
    "Ethiopian",
    "Ghanaian",
    "Kenyan",
    "Moroccan",
    "Nigerian",
    "South African",
    "Tunisian",
    "Ugandan",
    // Add more nationalities as needed
  ];

  // const handleNationalityChange = (nationality) => {
  //   setSelectedNationality(nationality);
  // };

  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {nationalities.map((nationality, index) => (
          <Picker.Item key={index} label={nationality} value={nationality} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 10,
  },
});

export default NationalityAppPicker;
