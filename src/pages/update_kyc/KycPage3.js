/** @format */

import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import RegionAppPicker from "./components/RegionAppPicker";
import CountryAppPicker from "./components/CountryAppPicker";
import CustomeTextInputField from "../profile_page/components/CustomeTextInputField";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Spacer from "../components/Spacer";
import AppText from "../components/AppText";
import Header from "../components/Header";
import PageIndicator2 from "../components/PageIndicator2";
import { useState } from "react";

function KycPage3({ navigation, route }) {
  const values = route.params;

  const [residentialAddress, setResidentialAddress] = useState("");

  const [selectedContinent, setSelectedContinent] = useState("Please select");
  const [continent, setContinent] = useState("Please select");
  const [selectedCountry, setSelectedCountry] = useState("Please select");
  const [country, setCountry] = useState("Please select");

  //onsubmit, add the selected choice to the object and move to the next page
  const handleSubmit = () => {
    const newValues = {
      ...values,
      residentialAddress: residentialAddress,
      continent: continent,
      country: country,
    };
    // Navigate to the next page with the updated data
    navigation.navigate("kycpage4", { newValues });
  };

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    setContinent(continent);
  };
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setCountry(country);
  };
  return (
    <>
      <View style={styles.container}>
        <Spacer height={40} />
        <Header headerTitle={"KYC Form"} canGoBack />
        <Spacer height={10} />
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <PageIndicator2 pageIndex={3} />
        </View>
        <Spacer height={20} />
        <View style={styles.banner}>
          <AppText
            theText={"C. Address Details"}
            color={"white"}
            fontSize={24}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Spacer height={20} />
          <AppText theText={"Country"} />
          <Spacer height={10} />
          <CountryAppPicker
            selectedValue={selectedCountry}
            onValueChange={handleCountryChange}
          />
          <Spacer height={20} />
          <AppText theText={"City/Region"} />
          <Spacer height={10} />
          <RegionAppPicker
            selectedValue={selectedContinent}
            onValueChange={handleContinentChange}
          />
          <Spacer height={20} />
          <View style={{ justifyContent: "center" }}>
            <AppText theText={"Residential Address"} />
            <View style={styles.textInput}>
              <TextInput
                placeholder="Residential Address"
                onChangeText={(text) => setResidentialAddress(text)}
              />
            </View>
          </View>
          <Spacer height={30} />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <AppButton AppBtnText={"Next"} onPress={() => handleSubmit()} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    width: 500,
    height: 65,
    backgroundColor: "#305af9",
    overflow: "visible",
    justifyContent: "center",
    paddingHorizontal: 30,
    elevation: 20,
    shadowColor: "#4361EE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  textInput: {
    width: 370,
    backgroundColor: "#f4f4f4",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default KycPage3;
