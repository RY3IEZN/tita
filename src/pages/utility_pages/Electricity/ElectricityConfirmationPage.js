/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../../components/AppContainerView";
import Header from "../../components/Header";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import Spacer from "../../components/Spacer";

function ElectricityConfirmationPage({ navigation, route }) {
  const values = route.params;

  console.log(values);
  return (
    <AppContainerView>
      <Header
        fontSize={24}
        fontWeight={"600"}
        headerTitle={"Electricity"}
        canGoBack
        onPress={() => navigation.goBack()}
      />
      <Spacer height={30} />
      <View style={{ marginHorizontal: 15 }}>
        {/* meter number */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Meter Number"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText theText={"1929109820"} />
        </View>
        <Spacer height={15} />

        {/* name */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Name"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText theText={"Aliyu Victor"} />
        </View>
        <Spacer height={15} />

        {/* State */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"State"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText theText={"Abuja"} />
        </View>
        <Spacer height={15} />

        {/* Phone Number */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Phone Number"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText theText={"09150956945"} />
        </View>
        <Spacer height={15} />

        {/* Email Address */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Email Address"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText theText={"kingsleyd@gmail.com"} />
        </View>
        <Spacer height={15} />

        {/* Distribution Company*/}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Distribution\nCompany"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText
            theText={"Abuja Electricity\nDistribution Company"}
            textAlign={"right"}
          />
        </View>
        <Spacer height={15} />

        {/* amount */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Amount"}
            color={"blue"}
            fontsize={20}
            fontWeight={"700"}
          />
          <AppText theText={"4000"} />
        </View>
        <Spacer height={15} />

        <Spacer height={35} />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AppButton AppBtnText={"Proceed to payment"} />
        </View>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ElectricityConfirmationPage;
