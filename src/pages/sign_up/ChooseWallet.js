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

const { width, height } = Dimensions.get("screen");

function ChooseWallet({ navigation, route }) {
  const [checked, setChecked] = useState("");
  const [account_type, setAccount_type] = useState("");

  const {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    date_of_birth,
  } = route.params;

  console.log(
    "it may have not set on the firstpage, but it will set here",
    first_name
  );

  function moveToTheNextPage() {
    navigation.navigate("addphonenumber", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      date_of_birth: date_of_birth,
      account_type: account_type,
    });
  }

  return (
    <AppContainerView>
      <Header headerTitle={"Choose Wallet"} />
      <Spacer height={20} />
      <View style={{ alignItems: "center" }}>
        <PageIndicator pageIndex={2} />
        <Image source={require("../../../assets/icons/choosewallet.png")} />
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
            setAccount_type("individual");
          }}
        />
        <AppText theText={"Individual Wallet"} />
      </View>

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
            setAccount_type("business");
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
            moveToTheNextPage();
          }}
        />
      </View>
      <Spacer height={height * 0.3} />
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
