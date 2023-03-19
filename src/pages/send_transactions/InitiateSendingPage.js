/** @format */

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import AppSoftCards from "../components/AppSoftCards";

const { width, height } = Dimensions.get("screen");

function InitiateSendingPage({ navigation }) {
  return (
    <AppContainerView>
      <Header headerTitle={"Send"} />
      <Spacer height={10} />

      <View style={{ alignItems: "center" }}>
        <AppText
          theText={"What do you want to send"}
          fontSize={17}
          fontWeight={"bold"}
        />
      </View>
      <Spacer height={70} />

      <AppSoftCards
        cardTitle={"Transfer Voucher"}
        onPress={() => {
          navigation.navigate("initiateVoucherTransfer");
        }}
      />
      <AppSoftCards
        cardTitle={"Transfer Money"}
        onPress={() => {
          navigation.navigate("transferTypePage");
        }}
      />
      <Spacer height={10} />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InitiateSendingPage;
