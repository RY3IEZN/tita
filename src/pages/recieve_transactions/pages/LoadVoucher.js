/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../components/CustomTextInputField2";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import UseApi from "../../../api/UseApi";
import VouchersApi from "../../../api/services/VouchersApi";
import { useState } from "react";
import { useEffect } from "react";
import { Formik } from "formik";
import { Alert } from "react-native";

function LoadVoucher(props) {
  const [isLoading, setIsLoading] = useState(false);

  const verifyVoucherApi = UseApi(VouchersApi.verify_voucher);

  // onsubmit function to post
  const onFormSubmit = (values) => {
    verifyVoucherApi.makeRequest(values);
    setIsLoading(true);
  };

  useEffect(() => {
    if (verifyVoucherApi.data) {
      console.log(verifyVoucherApi.statusCode);
      console.log(verifyVoucherApi.data);
      if (
        verifyVoucherApi.data.message ===
        "The selected voucher code is invalid."
      ) {
        Alert.alert("Invalid Voucher", "The voucher code is invalid.");
      }
    }
  }, [verifyVoucherApi.data]);

  return (
    <>
      <Spacer height={20} />
      <AppText
        textAlign={"center"}
        theText={
          "Add Money to your TITA Bank Account by Loading a TITA Voucher Token and card pin below."
        }
      />
      <Spacer height={20} />
      <Formik
        initialValues={{ voucher_code: "", voucher_pin: "" }}
        onSubmit={(values) => {
          console.log(values);
          onFormSubmit(values);
        }}
        // validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View style={{ marginHorizontal: 15 }}>
              <CustomeTextInputField2
                inputTitle={"Voucher code"}
                img={require("../../../../assets/icons/Wallet.png")}
                tintColor={"blue"}
                placeholder={"Voucher code"}
                values={values.voucher_code}
                onChangeText={handleChange("voucher_code")}
                keyboardType={"number-pad"}
              />
              <CustomeTextInputField2
                placeholder={"PIN"}
                tintColor={"blue"}
                inputTitle={"Pin"}
                onChangeText={handleChange("voucher_pin")}
                img={require("../../../../assets/icons/changepin.png")}
                values={values.voucher_pin}
                keyboardType={"number-pad"}
              />
              <AppText theText={"Date"} color={"#4361EE"} />
              <View style={styles.dateBox}>
                <MaterialCommunityIcons name="calendar" size={20} />
                <Spacer width={5} />
                <Text>{new Date().toLocaleDateString("en-CA")}</Text>
              </View>
            </View>
            <Spacer height={20} />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AppButton AppBtnText={"Load"} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
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
