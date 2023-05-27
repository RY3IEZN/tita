/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Fingerprint from "../../../assets/svg/Fingerprint";
import PageIndicator from "../components/PageIndicator";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import * as LocalAuthentication from "expo-local-authentication";
import { useEffect } from "react";

const { width, height } = Dimensions.get("screen");

function AddFingerPrint({ navigation }) {
  useEffect(() => {
    checkFingerprint();
  }, []);

  const checkFingerprint = async () => {
    const supported = await LocalAuthentication.hasHardwareAsync();
    if (supported) {
      const biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (biometricRecords) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: "Scan your fingerprint",
        });
        if (result.success) {
          // Fingerprint authenticated successfully
          console.log("Fingerprint authenticated");
          Alert.alert("Success", "Succesfully Registered Operation");
          navigation.navigate("loginpage");
        } else {
          // Fingerprint authentication failed
          console.log("Fingerprint authentication failed:", result.error);
          if (result.error == "user_cancel") {
            Alert.alert("Error", "User Cancelled Operation");
          }
        }
      } else {
        // No biometric records found on the device
        console.log("No biometric records found");
      }
    } else {
      // Biometric authentication not supported on the device
      console.log("Biometric authentication not supported");
    }
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Add Fingerprint"} />
      <Spacer height={10} />
      <PageIndicator pageIndex={5} />
      <Spacer height={220} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Fingerprint />
      </View>
      <Spacer height={180} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AppButton AppBtnText={"Enable now"} />
      </View>
      <View
        style={{
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("loginpage")}>
          <AppText
            theText={"Not now"}
            fontSize={18}
            color={"#3862F8"}
            textAlign={"center"}
          />
        </TouchableOpacity>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AddFingerPrint;
