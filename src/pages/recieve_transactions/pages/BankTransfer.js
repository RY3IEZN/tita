/** @format */

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../components/CustomTextInputField2";
import BankTransfersvg from "../../../../assets/svg/BankTransfersvg";

function BankTransfer(props) {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Spacer height={10} />
        <Spacer height={10} />
        <BankTransfersvg />
        <AppText
          textAlign={"center"}
          theText={
            "Add Money to your TITA Bank Account by making a transfer to the account below and your account would be credited directly."
          }
        />
      </View>
      <View style={{ alignItems: "center" }}></View>
      <Spacer height={20} />
      <CustomeTextInputField2
        inputTitle={"Bank"}
        inputfieldIcon={"wallet"}
        placeholder={"Bank"}
      />
      <CustomeTextInputField2
        inputTitle={"Account Number"}
        placeholder={"Account Number"}
        inputfieldIcon={"credit-card-outline"}
        keyboardType={"number-pad"}
      />
      <CustomeTextInputField2
        inputTitle={"Beneficiary"}
        placeholder={"Beneficiary"}
        inputfieldIcon={"account-multiple-outline"}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BankTransfer;
