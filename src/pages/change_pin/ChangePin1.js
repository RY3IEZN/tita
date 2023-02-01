/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";

function ChangePin1({ navigation }) {
  return (
    <AppContainerView>
      <Header headerTitle={"Change Pin"} />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../../../assets/icons/changepassword.png")}
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
        You will need to Authenticate with an OTP when you change your Pin
      </Text>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <AppButton
          AppBtnText={"Continue"}
          onPress={() => navigation.navigate("changepinform")}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChangePin1;
