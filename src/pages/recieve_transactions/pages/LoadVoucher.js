/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../components/CustomTextInputField2";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";

function LoadVoucher(props) {
  return (
    <>
      <Spacer height={20} />
      <AppText
        textAlign={"center"}
        theText={
          "Add Money to your TITA Bank Account by Loading a TITA Voucher Token and card pin below."
        }
      />
      <CustomeTextInputField2
        inputTitle={"Voucher code"}
        inputfieldIcon={"wallet"}
      />
      <CustomeTextInputField2
        inputTitle={"Pin"}
        inputfieldIcon={"lock-outline"}
      />
      <AppText theText={"Date"} color={"#4361EE"} />
      <View style={styles.dateBox}>
        <MaterialCommunityIcons name="calendar" size={20} />
        <Spacer width={5} />
        <Text>{new Date().toLocaleDateString()}</Text>
      </View>
      <Spacer height={20} />
      <View style={{ alignItems: "center" }}>
        <AppButton AppBtnText={"Load"} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  dateBox: {
    flexDirection: "row",
    backgroundColor: "#e8eaf3",
    width: 120,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadVoucher;
