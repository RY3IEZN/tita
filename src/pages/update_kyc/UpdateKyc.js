/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";

function UpdateKyc({ navigation }) {
  return (
    <AppContainerView>
      <Header headerTitle={"Update KYC"} />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../../../assets/icons/updatekyc.png")}
          style={{ height: 330, width: 350 }}
        />
      </View>

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
      <TouchableOpacity
        onPress={() => navigation.navigate("changepin2")}
        style={{ marginVertical: 20 }}
      >
        <AppButton AppBtnText={"Continue"} />
      </TouchableOpacity>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UpdateKyc;
