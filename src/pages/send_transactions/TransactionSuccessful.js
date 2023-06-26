/** @format */

import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import TransactionButtons from "./components/TransactionButtons";

const { width, height } = Dimensions.get("screen");

function TransactionSuccessful({ navigation }) {
  return (
    <AppContainerView>
      <View style={{ alignItems: "center" }}>
        <Header headerTitle={"Transaction Confirmation"} fontSize={23} />
        <Spacer height={70} />
        <Image
          source={require("../../../assets/icons/transactionsuccessful.png")}
        />
        <Spacer height={70} />
        <AppText theText={"Transaction Successful"} />
        <AppText theText={"N2,000,000,000"} />
        <AppText theText={new Date().toUTCString()} />
        <Spacer height={190} />

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TransactionButtons AppBtnText={"View Details"} onPress />
          <Spacer width={30} />
          <TransactionButtons
            AppBtnText={"Go Home"}
            onPress={() =>
              navigation.navigate("NestedTabs", { screen: "Home" })
            }
          />
        </View>
        <Spacer height={height * 0.08} />
        <Image source={require("../../../assets/icons/poweredbytita.png")} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TransactionSuccessful;
