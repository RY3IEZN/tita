/** @format */

import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";

const { width, height } = Dimensions.get("screen");

function ChangePinForm(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Change Pin"} />
      <View style={styles.formSection}>
        {/* current pin */}
        <Text>Current Pin</Text>
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}></View>
          <TextInput
            placeholder="Current Pin"
            style={{ width: width * 0.75 }}
          />
        </View>
        {/* new pin */}
        <Text style={{ marginTop: 10 }}>New Pin</Text>
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}></View>
          <TextInput placeholder="New Pin" style={{ width: width * 0.75 }} />
        </View>
        {/* confirm new pin */}
        <Text style={{ marginTop: 10 }}>Confirm New Pin</Text>
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}></View>
          <TextInput
            placeholder="Confirm New Pin"
            style={{ width: width * 0.75 }}
          />
        </View>
        {/* otp */}
        <Text style={{ marginTop: 10 }}>OTP</Text>
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}></View>
          <TextInput
            placeholder="Enter OTP Code"
            style={{ width: width * 0.75 }}
          />
        </View>
      </View>

      {/* <Text>A timer should be here and not this text</Text> */}
      {/* <Text>A timer should be here and not this text</Text> */}
      {/* <Text>A timer should be here and not this text</Text> */}

      <View style={{ alignItems: "center" }}>
        <AppButton AppBtnText="Authenticate" />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  formSection: {
    marginHorizontal: 22,
    marginVertical: 40,
  },
  textInputBox: {
    height: 55,
    width: width * 0.8,
    borderRadius: 15,
    borderColor: "black",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});

export default ChangePinForm;
