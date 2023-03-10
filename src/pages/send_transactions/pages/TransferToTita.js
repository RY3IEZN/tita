/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";

function TransferToTita(props) {
  return (
    <>
      <Spacer height={30} />
      <CustomeTextInputField2 placeholder={"Beneficiary"} />
      <Spacer height={20} />
      <CustomeTextInputField2 placeholder={"Amount"} inputfieldIcon={"cash"} />
      <Spacer height={20} />
      <CustomeTextInputField2 placeholder={"Remark"} />
      <Spacer height={50} />
      <AppButton AppBtnText={"Procced"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TransferToTita;
