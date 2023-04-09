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

function Verify(props) {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });

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
        />
        <Spacer height={35} />
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 1: text });
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 2: text });
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 3: text });
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 4: text });
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 5: text });
                text ? sixthInput.current.focus() : fourthInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 6: text });
                !text && fifthInput.current.focus();
              }}
            />
          </View>
        </View>
        <Spacer height={35} />
        <AppText theText={"Didn’t receive a Code?"} />
        <Spacer height={15} />
        <AppText
          theText={"Resend Code!"}
          fontWeight={"bold"}
          textDecorationLine={"underline"}
        />
        <Spacer height={15} />
        <AppButton AppBtnText={"Verify"} onPress={() => console.log(otp)} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 8,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "blue",
    marginHorizontal: 5,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 27,
    // color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 10,
    // paddingVertical: ,
  },
});

export default Verify;
