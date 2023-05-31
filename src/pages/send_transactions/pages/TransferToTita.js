/** @format */

import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";
import Transact from "../../../api/transactions/Transact";
import UseApi from "../../../api/UseApi";
import { Formik } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   account_number: Yup.string().required("Required"),
//   amount: Yup.number().required("Required").positive("Amount must be positive"),
//   description: Yup.string().required("Required"),
// });

function TransferToTita(props) {
  const sendMoneyApi = UseApi(Transact.transfer_to_tita_user);

  const onFormSubmit = (values) => {
    sendMoneyApi.makeRequest(values);
  };

  useEffect(() => {
    if (sendMoneyApi.data) {
      console.log(sendMoneyApi.statusCode, "aaaaaaaaaaaaaaaaaaaaaaa");

      console.log(
        "++++++++++++++++++++++++++++=",
        sendMoneyApi.data,
        "##########################"
      );
    }
  }, [sendMoneyApi.data]);

  return (
    <>
      <Formik
        initialValues={{ account_number: "", amount: "", descripttion: "" }}
        onSubmit={(values) => {
          console.log(values);
          onFormSubmit(values);
        }}
        // validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <Spacer height={30} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <CustomeTextInputField2
                placeholder={"Beneficiary"}
                onChangeText={handleChange("account_number")}
                values={values.account_number}
              />
            </View>
            {/* <AppText theText={errors.email} /> */}
            <Spacer height={20} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <CustomeTextInputField2
                placeholder={"Amount"}
                img={require("../../../../assets/icons/naira_sign_img.png")}
                keyboardType={"number-pad"}
                onChangeText={handleChange("amount")}
                values={values.amount}
              />
            </View>
            {/* <AppText theText={errors.email} /> */}
            <Spacer height={20} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <CustomeTextInputField2
                placeholder={"Remark"}
                onChangeText={handleChange("descripttion")}
                values={values.descripttion}
              />
            </View>
            {/* <AppText theText={errors.email} /> */}
            <Spacer height={50} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <AppButton AppBtnText={"Procced"} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TransferToTita;
