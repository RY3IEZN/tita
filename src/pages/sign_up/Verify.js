/** @format */

import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import CustomeTextInputField from "../profile_page/components/CustomeTextInputField";
import PageIndicator from "../components/PageIndicator";

import UseApi from "../../api/UseApi";
import AuthApi from "../../api/auth/AuthApi";

function Verify(props) {
  const firstInput = useRef(null);
  const inputs = Array.from({ length: 6 }, () => useRef(null));
  const [otp, setOtp] = useState(Array(6).fill(""));

  const verifyOtpApi = UseApi(AuthApi.verify_code);

  const handleInputChange = (index, text) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < 5) {
      inputs[index + 1].current.focus();
    } else if (!text && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const handleSubmit = () => {
    console.log(otp.join(""));
  };

  return (
    <AppContainerView>
      <View style={styles.container}>
        <Header headerTitle={"Verify"} />
        <Spacer height={15} />
        <PageIndicator pageIndex={4} />
        <Spacer height={50} />
        <AppText
          theText={
            "Please enter the 6 digit one time code to activate your account!"
          }
          textAlign={"center"}
        />
        <Spacer height={35} />
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View style={styles.otpBox} key={index}>
              <TextInput
                style={styles.otpText}
                maxLength={1}
                ref={inputs[index]}
                onChangeText={(text) => handleInputChange(index, text)}
                value={digit}
              />
            </View>
          ))}
        </View>
        <Spacer height={35} />
        <AppText theText={"Didn’t receive a Code?"} />
        <Spacer height={20} />
        <AppText
          theText={"Resend Code!"}
          fontWeight={"bold"}
          textDecorationLine={"underline"}
        />
        <Spacer height={40} />
        <AppButton AppBtnText={"Verify"} onPress={handleSubmit} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "blue",
    marginHorizontal: 5,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 27,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default Verify;
