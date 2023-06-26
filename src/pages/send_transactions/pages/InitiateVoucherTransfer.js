/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, ActivityIndicator } from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppPicker from "../../components/AppPicker";
import Header from "../../components/Header";
import Spacer from "../../components/Spacer";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";
import UseApi from "../../../api/UseApi";
import Transact from "../../../api/transactions/Transact";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import VouchersApi from "../../../api/services/VouchersApi";

function InitiateVoucherTransfer({ navigation }) {
  const [voucherType, setVoucherType] = useState();
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [loadingDate, setLoadingDate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createTitaVoucher = UseApi(Transact.create_tita_voucher);

  const onFormSubmit = (values) => {
    setIsLoading(true);
    createTitaVoucher.makeRequest(values);
    console.log(createTitaVoucher.data);
  };

  useEffect(() => {
    if (createTitaVoucher.data && createTitaVoucher.data.errors) {
      const { errors } = createTitaVoucher.data;

      if (errors.account_number) {
        Alert.alert("Error", errors.account_number[0]);
        setIsLoading(false);
      } else if (errors.amount) {
        Alert.alert("Error", errors.amount[0]);
        setIsLoading(false);
      } else if (errors.description) {
        Alert.alert("Error", errors.description[0]);
        setIsLoading(false);
      } else if (errors.type) {
        Alert.alert("Error", errors.type[0]);
        setIsLoading(false);
      } else if (errors.message === "Insufficient balance to create voucher") {
        Alert.alert("Error", "Insufficient balance to create voucher");
        setIsLoading(false);
      } else {
        Alert.alert("Error", "An error occurred.");
        setIsLoading(false);
      }
    } else if (createTitaVoucher.data) {
      setIsLoading(false);
      navigation.replace("voucherdetailspage", {
        voucherDetails: createTitaVoucher.data,
      });
    }
  }, [createTitaVoucher.data]);

  return (
    <AppContainerView>
      <Header headerTitle={"Voucher Transfer"} fontWeight={"600"} />
      <Spacer height={50} />
      <Formik
        initialValues={{
          amount: "",
          type: "",
          condition: [""],
          account_number: "",
          description: "",
          loading_date: "",
        }}
        onSubmit={(values) => {
          console.log(values.condition);
          onFormSubmit(values);
        }}
        // validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            {/* app picker */}
            <AppPicker
              defaultTitle={"Voucher Type"}
              label1={"Open"}
              label2={"program"}
              value1={"Open"}
              value2={"program"}
              onValueChange={(type) => {
                handleChange("type")(type);
                if (type == "program") {
                  setVoucherType("program");
                } else {
                  setVoucherType("");
                }
              }}
              // for now it just console logs the value
            />
            <Spacer height={30} />
            {/* account type */}
            <AppPicker
              defaultTitle={"Select Account "}
              label1={"TITA Wallet"}
              label2={"Savings Account"}
              value1={"TITA Wallet"}
              value2={"Savings Account"}
              label3={"Business Account"}
              value3={"Business Account"}
              onValueChange={(accountType) => {
                handleChange("accountType")(accountType);
              }}
              // for now it just console logs the value
            />
            <Spacer height={10} />
            <View style={{ alignItems: "center" }}>
              <CustomeTextInputField2
                placeholder={"Amount"}
                img={require("../../../../assets/icons/nairasign2.png")}
                keyboardType={"number-pad"}
                onChangeText={handleChange("amount")}
                values={values.amount}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <CustomeTextInputField2
                placeholder={"Description"}
                img={require("../../../../assets/icons/nairasign2.png")}
                onChangeText={handleChange("description")}
                values={values.description}
              />
            </View>

            {isBeneficiary ? (
              <View style={{ alignItems: "center" }}>
                <CustomeTextInputField2
                  placeholder={"Account Number"}
                  img={require("../../../../assets/icons/profile-circle.png")}
                  tintColor={"black"}
                  keyboardType={"number-pad"}
                  onChangeText={handleChange("account_number")}
                  values={values.account_number}
                />
              </View>
            ) : (
              ""
            )}

            <Spacer height={20} />
            {/* voucher condition only shows when the program type is set to "program" */}
            {voucherType == "program" ? (
              <View style={{ marginVertical: 20 }}>
                <AppPicker
                  defaultTitle={"Voucher Condition"}
                  label1={"Loading Date"}
                  label2={"Request Back for Pin"}
                  label3={"Beneficiary"}
                  value1={"Loading Date"}
                  value2={"request_pin"}
                  value3={"beneficiary"}
                  onValueChange={(condition) => {
                    handleChange("condition[0]")(condition);
                    if (condition == "beneficiary") {
                      setIsBeneficiary(true);
                      setLoadingDate(false);
                    }
                    if (condition == "Loading Date") {
                      setLoadingDate(true);
                      setIsBeneficiary("");
                    }
                    if (condition == "request_pin") {
                      setLoadingDate(false);
                      setIsBeneficiary("");
                    }
                  }}
                />
              </View>
            ) : (
              ""
            )}
            {loadingDate ? (
              <View style={{ alignItems: "center" }}>
                <CustomeTextInputField2
                  placeholder={"Loading Date"}
                  img={require("../../../../assets/icons/calendar.png")}
                  tintColor={"black"}
                  // keyboardType={"number-pad"}
                  onChangeText={handleChange("account_number")}
                  values={values.account_number}
                />
              </View>
            ) : (
              ""
            )}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <AppButton
                AppBtnText={
                  isLoading ? (
                    <ActivityIndicator color="white" size={40} />
                  ) : (
                    "Procced"
                  )
                }
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InitiateVoucherTransfer;
