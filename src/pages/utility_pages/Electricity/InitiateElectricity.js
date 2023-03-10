/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import Header from "../../components/Header";
import PageIndicator from "../../components/PageIndicator";
import CustomeTextInputField from "../../profile_page/components/CustomeTextInputField";
import UtilityButtons from "../Components/UtilityButtons";

function InitiateElectricity(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Electricity"} />

      <View style={{ alignItems: "center" }}>
        <PageIndicator pageIndex={1} />
      </View>
      <AppText theText={"Meter Number"} />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <UtilityButtons />
        <UtilityButtons color={"blue"} AppBtnText={"+ Add Meter"} />
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <AppText theText={"Distribution Company"} />
        <AppPicker defaultTitle={"Please select"} />
        <CustomeTextInputField
          inputTitle={"How much Electricity do you want to buy?"}
          TextinputTitle={"N10,000"}
        />
        <CustomeTextInputField inputTitle={"Email"} TextinputTitle={"Email"} />
        <AppButton AppBtnText={"Continue"} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InitiateElectricity;
