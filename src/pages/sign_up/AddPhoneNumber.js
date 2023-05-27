/** @format */

import React from "react";
import { View, StyleSheet, Image, TextInput, Dimensions } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import AppButton from "../components/AppButton";
import Checkbox from "expo-checkbox";
import Spacer from "../components/Spacer";
import PageIndicator from "../components/PageIndicator";
import Telephone from "../../../assets/svg/Telephone";
import { useState } from "react";
import { Alert } from "react-native";
import AuthApi from "../../api/auth/AuthApi";
import UseApi from "../../api/UseApi";
import { Formik } from "formik";

const { width, height } = Dimensions.get("screen");

function AddPhoneNumber({ navigation, route }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const valuess = route.params;

  // console.log(newValues, "this has been passed 3 times");
  const verifyPhoneNumberApi = UseApi(AuthApi.verify_phone_number);

  const updateNewValues = () => {
    const newValues = {
      ...valuess,
      phone_number: phoneNumber,
    };
    console.log(newValues, "0000000000000000000000000");
    // Navigate to the next page with the updated data
    navigation.navigate("verifypage", { newValues });
  };

  const onFormSubmit = (values) => {
    // // Check if phone number is valid Nigerian number
    // precisely +2348012345678

    // const isValidNigerianNumber = /^\+234\d{10}$/.test(phoneNumber);
    // if (!isValidNigerianNumber) {
    //   Alert.alert("Invalid phone number");
    //   return;
    // } else {
    //   console.log("continue");
    // }

    setIsLoading(true);

    verifyPhoneNumberApi.makeRequest(values);

    console.log(verifyPhoneNumberApi.statusCode, "#########################3");

    updateNewValues();
    // // Do something with the phone number, like sending a text
    // // send to thce backend get a token validate and all that good good
    // //possibly Alert.alert succefully verified

    setIsLoading(false);
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Add Phone Number"} />
      <View style={{ alignItems: "center" }}>
        <Spacer height={10} />
        <PageIndicator pageIndex={3} />
        <Spacer height={15} />
        <AppText theText={"We’ll need to confirm it by sending a text."} />
        <Spacer height={20} />
        <Telephone />
        <Spacer height={50} />
        <Formik
          initialValues={{ phone_number: "" }}
          onSubmit={(values) => {
            console.log(values);
            onFormSubmit(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <View style={styles.textInputBox}>
                <View style={{ marginHorizontal: 10 }}>
                  <Image
                    source={require("../../../assets/icons/nigerianflag.png")}
                  />
                </View>
                <TextInput
                  placeholder="+23480123456789"
                  keyboardType="phone-pad"
                  style={{ width: width * 0.75 }}
                  onChangeText={handleChange("phone_number")}
                  value={values.phone_number}
                />
              </View>

              <Spacer height={50} />
              <AppButton AppBtnText={"Procced"} onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Spacer height={30} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <Checkbox value color={"blue"} />
          <Spacer width={10} />
          <AppText
            theText={
              "I allow Tita to use this phone number for login and communication purposes."
            }
          />
        </View>
        <Spacer height={90} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText theText={"Already have an account?"} />
          <Spacer width={5} />
          <AppText
            theText={"Login"}
            color={"#3862F8"}
            textDecorationLine={"underline"}
          />
        </View>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox: {
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AddPhoneNumber;
