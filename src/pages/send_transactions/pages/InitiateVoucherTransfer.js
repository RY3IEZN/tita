/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppPicker from "../../components/AppPicker";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";

function InitiateVoucherTransfer(props) {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [valueC, setValueC] = useState();
  const [amount, setAmount] = useState();
  return (
    <AppContainerView>
      <Header headerTitle={"Voucher Transfer"} fontWeight={"600"} />
      <Spacer height={80} />
      {/* app picker */}
      <AppPicker
        defaultTitle={"Voucher Type"}
        label1={"Open"}
        label2={"Program"}
        value1={"Open"}
        value2={"Program"}
        onValueChange={(valueA) => {
          console.log(valueA);
          setValueA(valueA);
        }}
        // for now it just console logs the value
      />
      <Spacer height={30} />
      {/* account type */}
      <AppPicker
        defaultTitle={"Select Account "}
        label1={"TITA Wallet"}
        label2={"Savings Account"}
        value1={"TITA Wallet"}
        value2={"Savings Account"}
        label3={"Business Account"}
        value3={"Business Account"}
        onValueChange={(valueB) => {
          console.log(valueB);
          setValueB(valueB);
        }}
        // for now it just console logs the value
      />
      <Spacer height={10} />
      <View style={{ alignItems: "center" }}>
        <CustomeTextInputField2
          placeholder={"Amount"}
          img={require("../../../../assets/icons/naira_sign_img.png")}
          onChangeText={(text) => setAmount(text)}
          keyboardType={"number-pad"}
        />
      </View>

      <Spacer height={20} />
      {/* voucher condition only shows when the program type is set to "program" */}
      {valueA == "Program" ? (
        <View style={{ marginVertical: 20 }}>
          <AppPicker
            defaultTitle={"Vocher Condition "}
            label1={"Loading Date"}
            label2={"Request Back for Pin"}
            value1={"Request Back for Pin"}
            value2={"Request Back for Pin"}
            label3={"Beneficiary"}
            value3={"Beneficiary"}
            onValueChange={(valueC) => {
              console.log(valueC);
              setValueC(valueC);
            }}
          />
        </View>
      ) : (
        ""
      )}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AppButton
          AppBtnText={"Procced"}
          onPress={() => console.log(valueA, valueB, valueC, amount)}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InitiateVoucherTransfer;
