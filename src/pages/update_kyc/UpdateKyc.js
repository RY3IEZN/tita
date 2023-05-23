/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import CountryAppPicker from "./components/CountryAppPicker";
import RegionAppPicker from "./components/RegionAppPicker";
import CustomeTextInputField from "../profile_page/components/CustomeTextInputField";
import Spacer from "../components/Spacer";

function UpdateKyc({ navigation }) {
  return (
    <AppContainerView>
      <Header
        headerTitle={"Update KYC"}
        canGoBack
        onPress={() => navigation.goBack()}
      />

      <View
        style={{
          alignItems: "center",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../../assets/icons/updatekyc.png")}
          style={{ height: 235, width: 235 }}
        />

        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "500",
            color: "#777777",
          }}
        >
          Update your Know Your Client form (KYC form) in other for us (TITA) to
          know more about you.
        </Text>
        <Spacer height={30} />
        <AppButton
          AppBtnText={"Continue"}
          onPress={() => navigation.navigate("kycpage1")}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UpdateKyc;
