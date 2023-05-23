/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const RegionAppPicker = () => {
  const [selectedContinent, setSelectedContinent] = useState("Please select");

  const continents = [
    "Please select",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Australia",
    "Antarctica",
  ];

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedContinent}
        onValueChange={handleContinentChange}
      >
        {continents.map((continent, index) => (
          <Picker.Item key={index} label={continent} value={continent} />
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

export default RegionAppPicker;
