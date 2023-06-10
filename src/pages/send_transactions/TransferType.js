/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import AppPicker from "../components/AppPicker";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import CustomeTextInputField2 from "../recieve_transactions/components/CustomTextInputField2";
import TransferToOtherBanks from "./pages/TransferToOtherBanks";
import TransferToTita from "./pages/TransferToTita";

function TransferType({ itemValue, navigation }) {
  const [typeOfTransfer, setTypeOfTransfer] = useState("");

  return (
    <AppContainerView>
      <Header headerTitle={"Send"} />
      <Spacer height={10} />
      <View style={{ alignItems: "center" }}>
        <AppText
          theText={"Transfer to accounts"}
          fontSize={17}
          fontWeight={"bold"}
        />
      </View>
      <Spacer height={20} />
      <AppPicker
        defaultTitle={"Transfer type"}
        label1={"Transfer to my TITA account"}
        value1={"TITA TO TITA"}
        label2={"Transfer to other banks"}
        value2={"TITA TO OTHER BANKS"}
        itemValue={itemValue}
        onValueChange={(value) => {
          console.log(value);
          setTypeOfTransfer(value);
        }}
      />
      {typeOfTransfer == "TITA TO TITA" ? (
        <TransferToTita navigation={navigation} />
      ) : (
        ""
      )}
      {typeOfTransfer == "TITA TO OTHER BANKS" ? (
        <TransferToOtherBanks navigation={navigation} />
      ) : (
        ""
      )}
      <Spacer height={50} />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TransferType;
