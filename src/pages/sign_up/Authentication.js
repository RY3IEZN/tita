/** @format */

import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import AppSoftCards from "../components/AppSoftCards";
import AppText from "../components/AppText";
import Header from "../components/Header";
import LoadingModal from "../components/LoadingModal";
import Spacer from "../components/Spacer";

function Authentication(props) {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  return (
    <AppContainerView>
      <View style={{ alignItems: "center" }}>
        <Spacer height={20} />
        <Header headerTitle={"Authentication"} />
        <Spacer height={20} />
        <AppText theText={"Please enter your 4 digit pin"} />
        <Spacer height={20} />
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
                setOtp({ ...otp, 6: text });
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>
        <Spacer height={20} />
        <AppButton
          AppBtnText={"Authenticate"}
          onPress={() => setShowLoadingModal(true)}
        />
        <LoadingModal
          isLoading={showLoadingModal}
          onPress={() => setShowLoadingModal(false)}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  otpContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "blue",
    marginHorizontal: 10,
    borderWidth: 0.5,
  },
  otpText: {
    backgroundColor: "white",
    height: 47,
    fontSize: 27,
    // color: Colors.DEFAULT_BLACK,
    // padding: 0,
    textAlign: "center",
    paddingHorizontal: 15,
    // paddingVertical: -10,
  },
});

export default Authentication;
