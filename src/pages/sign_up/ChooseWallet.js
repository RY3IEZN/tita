/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import PageIndicator from "../components/PageIndicator";
import Spacer from "../components/Spacer";
import Choosewallet from "../../../assets/svg/Choosewallet";

const { width, height } = Dimensions.get("screen");

function ChooseWallet({ navigation, route }) {
  const [checked, setChecked] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  // details from the previous page
  const { values } = route.params;

  //handle the choice the consumer picked
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  //onsubmit, add the selected choice to the object and move to the next page
  const handleSubmit = () => {
    const newValues = {
      ...values,
      account_type: selectedOption === "option1" ? "individual" : "business",
    };
    // Navigate to the next page with the updated data
    navigation.navigate("addphonenumber", { newValues });
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Choose Wallet"} />
      <Spacer height={20} />
      <View style={{ alignItems: "center" }}>
        <PageIndicator pageIndex={2} />
        <Choosewallet />
        <AppText theText={"Choose an account that"} />
        <AppText theText={"suits your needs"} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RadioButton
          value="first"
          color="#4260ee"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => {
            setChecked("first");
            handleOptionSelect("option1");
          }}
        />
        <AppText theText={"Individual Wallet"} />
      </View>
      <Spacer height={15} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RadioButton
          value="second"
          color="#4260ee"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => {
            setChecked("second");
            handleOptionSelect("option2");
          }}
        />
        <AppText theText={"Business Wallet"} />
      </View>
      <Spacer height={15} />
      <View style={{ alignItems: "center" }}>
        <AppButton
          AppBtnText={"Procced"}
          onPress={() => {
            console.log("Procced");
            handleSubmit();
          }}
        />
      </View>
      <Spacer height={height * 0.1} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppText theText={"Already have an account?"} />
        <Spacer width={5} />
        <AppText
          theText={"Login"}
          color={"#3862F8"}
          textDecorationLine={"underline"}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChooseWallet;
