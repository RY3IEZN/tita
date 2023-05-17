/** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";
import Transact from "../../../api/transactions/Transact";
import UseApi from "../../../api/UseApi";
import { Formik } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required("Required").label("Username").email(),
//   password: Yup.string().required("Required").min(6).label("Password"),
// });

function TransferToTita(props) {
  const [beneficiaryDetails, setBeneficiaryDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [descripttion, setdescripttion] = useState("");

  const sendMoneyApi = UseApi(Transact.transfer_to_tita_user);

  const onFormSubmit = (values) => {
    sendMoneyApi.makeRequest(values);
    console.log(sendMoneyApi.statusCode, "----------------------------------");
    console.log(
      "++++++++++++++++++++++++++++=",
      sendMoneyApi.data,
      "##########################"
    );
    console.log(sendMoneyApi.error, "##########################");
  };

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
