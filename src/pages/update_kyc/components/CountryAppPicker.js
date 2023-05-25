/** @format */

import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CountryAppPicker = ({ selectedValue, onValueChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Please select");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const countryNames = data.map((country) => country.name.common);
      setCountries(["Please select", ...countryNames.sort()]);
    } catch (error) {
      console.log("Error fetching countries:", error);
    }
  };

  // const handleCountryChange = (country) => {
  //   setSelectedCountry(country);
  // };

  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {countries.map((country, index) => (
          <Picker.Item key={index} label={country} value={country} />
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
    shadowRadius: 2,
    elevation: 4,
    borderRadius: 5,
    overflow: "hidden",
    height: 60,
    justifyContent: "center",
  },
});

export default CountryAppPicker;
