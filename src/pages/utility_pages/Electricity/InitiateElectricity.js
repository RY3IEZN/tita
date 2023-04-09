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
import Spacer from "../../components/Spacer";

function InitiateElectricity(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Electricity"} />

      <View style={{ alignItems: "center" }}>
        <PageIndicator pageIndex={1} />
      </View>
      {/* meter number */}
      <Spacer height={30} />
      <AppText theText={"Meter Number"} />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <UtilityButtons />
        <Spacer width={20} />
        <UtilityButtons color={"blue"} AppBtnText={"+ Add Meter"} />
      </View>
      <Spacer height={30} />
      <View style={{ alignItems: "flex-start" }}>
        <AppText theText={"Distribution Company"} />
        <AppPicker defaultTitle={"Please select"} />
        <Spacer height={30} />
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
        <AppButton AppBtnText={"Continue"} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InitiateElectricity;
