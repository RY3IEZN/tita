/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const { width, height } = Dimensions.get("screen");

function ChooseWallet(props) {
  const [checked, setChecked] = useState("first");

  return (
    <AppContainerView>
      <Header headerTitle={"Choose Wallet"} />
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../../assets/icons/choosewallet.png")} />
        <AppText theText={"Choose an account that suits your needs"} />
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
          onPress={() => setChecked("first")}
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
          onPress={() => setChecked("second")}
        />
        <AppText theText={"Business Wallet"} />
      </View>
      <Spacer height={15} />
      <View style={{ alignItems: "center" }}>
        <AppButton
          AppBtnText={"Procced"}
          onPress={() => console.log("Procced")}
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
