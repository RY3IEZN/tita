/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Header from "../components/Header";
import AppContainerView from "../components/AppContainerView";
import LineDivider from "../components/LineDivider";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Spacer from "../components/Spacer";

function RequestVirtualCardApplication(props) {
  return (
    <AppContainerView>
      <Header
        fontSize={22}
        fontWeight={"600"}
        headerTitle={"Card Application"}
        canGoBack
      />
      <Spacer height={15} />
      <View style={{ marginHorizontal: 15 }}>
        <AppText
          theText={"Personal information"}
          fontWeight={"bold"}
          fontSize={15}
        />
        <Spacer height={15} />
        {/* firstname */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"First Name"} />
          <AppText theText={"John"} />
        </View>
        <Spacer height={15} />
        {/* middlename */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Middle Name"} />
          <AppText theText={"N/A"} />
        </View>
        <Spacer height={15} />
        {/* Lastname */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Last Name"} />
          <AppText theText={"Doe"} />
        </View>
        <Spacer height={15} />
        {/* dob */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Date of Birth"} />
          <AppText theText={"4/5/2023"} />
        </View>
        <Spacer height={15} />
        {/* gender */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Gender"} />
          <AppText theText={"Male"} />
        </View>
        <Spacer height={15} />
        <LineDivider height={1} />
        <Spacer height={15} />
        {/* account details */}
        <AppText
          theText={"Account Details"}
          fontWeight={"bold"}
          fontSize={15}
        />
        <Spacer height={15} />
        {/* wallet type */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"TITA Wallet"} />
          <MaterialCommunityIcons
            name="check-circle"
            size={20}
            color="#3862F8"
          />
        </View>
        <Spacer height={15} />
        {/* account type */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Businness Account"} />
          <MaterialCommunityIcons
            name="check-circle"
            size={20}
            color="#3862F8"
          />
        </View>
        <Spacer height={15} />
        <LineDivider height={0.5} />
        <Spacer height={15} />

        {/* transaction limit */}
        <AppText
          theText={"Transaction Limit (Tier 3)"}
          fontWeight={"bold"}
          fontSize={15}
        />
        <Spacer height={15} />
        {/* transaction  */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Daily Transaction Limit"} />
          <AppText theText={"N 500,000,000"} />
        </View>
        <Spacer height={15} />
        {/* fees and charges */}
        <AppText
          theText={"FEE and Charges"}
          fontWeight={"bold"}
          fontSize={15}
        />
        <Spacer height={15} />
        {/* issuance */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Issuance Fee"} />
          <AppText theText={"FREE"} />
        </View>
        <Spacer height={15} />
        {/* fees */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Maintenance Fee"} />
          <AppText theText={"FREE"} />
        </View>
        <Spacer height={30} />
        <AppButton AppBtnText={"Confirm and pay"} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RequestVirtualCardApplication;
