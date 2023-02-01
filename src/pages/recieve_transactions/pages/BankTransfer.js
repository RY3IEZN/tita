/** @format */

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../components/CustomTextInputField2";

function BankTransfer(props) {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Spacer height={10} />
        <Image source={require("../../../../assets/icons/banktransfer.png")} />
        <Spacer height={10} />
        <AppText
          textAlign={"center"}
          theText={
            "Add Money to your TITA Bank Account by making a transfer to the account below and your account would be credited directly."
          }
        />
      </View>
      <Spacer height={20} />
      <CustomeTextInputField2
        inputTitle={"Voucher code"}
        inputfieldIcon={"wallet"}
      />
      <CustomeTextInputField2
        inputTitle={"Account Number"}
        inputfieldIcon={"credit-card-outline"}
      />
      <CustomeTextInputField2
        inputTitle={"Beneficiary"}
        inputfieldIcon={"account-multiple-outline"}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BankTransfer;
