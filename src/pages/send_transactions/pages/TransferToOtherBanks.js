/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import CustomeTextInputField from "../../profile_page/components/CustomeTextInputField";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";

function TransferToOtherBanks({ navigation, onPress }) {
  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Spacer height={30} />
        <CustomeTextInputField2
          placeholder={"Search for banks"}
          inputfieldIcon={"magnify"}
        />
        <Spacer height={20} />
      </View>
      {/* <AppText theText={"Select Bank"} /> */}
      <AppPicker defaultTitle={"select bank"} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomeTextInputField2 placeholder={"123456789"} />
        <Spacer height={20} />
        <CustomeTextInputField2 placeholder={"Aliyu kwankwaso"} />
        <Spacer height={50} />
        <AppButton
          AppBtnText={"Next"}
          onPress={() => navigation.navigate("enterAmount")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TransferToOtherBanks;
