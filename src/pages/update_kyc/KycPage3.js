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

function KycPage3(props) {
  return (
    <>
      <Spacer height={40} />
      <Header headerTitle={"KYC Form"} canGoBack />
      <Spacer height={10} />
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <PageIndicator2 pageIndex={3} />
      </View>
      <Spacer height={20} />
      <View
        style={{
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
        }}
      >
        <AppText theText={"C. Address Details"} color={"white"} fontSize={24} />
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
        <CountryAppPicker />
        <Spacer height={20} />
        <AppText theText={"City/Region"} />
        <Spacer height={10} />
        <RegionAppPicker />
        <Spacer height={20} />
        <View style={{ justifyContent: "center" }}>
          <AppText theText={"Residential Address"} />
          <View
            style={{
              width: 370,
              backgroundColor: "#F4F4F4",
              height: 60,
              justifyContent: "center",
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <TextInput placeholder="Residential Address" />
          </View>
        </View>
        <Spacer height={30} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AppButton AppBtnText={"Next"} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default KycPage3;
