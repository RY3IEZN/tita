/** @format */

import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import Header from "../../components/Header";
import PageIndicator from "../../components/PageIndicator";
import CustomeTextInputField from "../../profile_page/components/CustomeTextInputField";
import UtilityButtons from "../Components/UtilityButtons";
import Spacer from "../../components/Spacer";
import ElectricityAppPicker from "../Components/ElectricityAppPicker";
import { useState } from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

function InitiateElectricity({ navigation }) {
  const [selectedDisco, setSelectedDisco] = useState("Please select");

  const handleDiscoChange = (discos) => {
    setSelectedDisco(discos);
    console.log(discos);
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Electricity"} canGoBack />
      {/* meter number */}
      <Spacer height={10} />
      <AppText theText={"Meter Number*"} />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {/* inpit electricity */}
        <View style={styles.appBtn}>
          <TextInput
            placeholder="201929109820"
            maxLength={16}
            keyboardType="number-pad"
          />
        </View>
        <Spacer width={20} />
        {/* add or save meter number */}
        <UtilityButtons color={"blue"} AppBtnText={"+ Add Meter"} />
      </View>
      <CustomeTextInputField inputTitle={"State*"} TextinputTitle={"Lagos"} />
      <Spacer height={30} />
      <AppText theText={"Distribution Company"} />
      <ElectricityAppPicker
        selectedValue={selectedDisco}
        onValueChange={handleDiscoChange}
      />
      <Spacer height={30} />
      <View style={{ alignItems: "center" }}>
        <View style={{ justifyContent: "center", marginHorizontal: 15 }}>
          <CustomeTextInputField
            inputTitle={"How much Electricity do you want to buy?"}
            TextinputTitle={"N10,000"}
          />
        </View>
        <View style={{ justifyContent: "center", marginHorizontal: 15 }}>
          <CustomeTextInputField
            inputTitle={"Email"}
            TextinputTitle={"Email"}
          />
        </View>
        <Spacer height={30} />
        <AppButton
          AppBtnText={"Continue"}
          onPress={() => navigation.navigate("ElectricityConfirmationPage")}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  appBtn: {
    height: height * 0.07,
    width: width * 0.4,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
});

export default InitiateElectricity;
