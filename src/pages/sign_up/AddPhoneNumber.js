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

const { width, height } = Dimensions.get("screen");

function AddPhoneNumber({ navigation, route }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const { newValues } = route.params;

  // console.log(newValues, "this has been passed 3 times");

  const handleProceed = () => {
    // Check if phone number is valid Nigerian number
    const isValidNigerianNumber = /^0\d{10}$/.test(phoneNumber);
    if (!isValidNigerianNumber) {
      Alert.alert("Invalid phone number");
      return;
    }
    setIsLoading(true);
    // Do something with the phone number, like sending a text
    console.log(phoneNumber);
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
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="diving-scuba-flag"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput
            placeholder="Phone Number"
            style={{ width: width * 0.75 }}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Spacer height={50} />
        <AppButton AppBtnText={"Procced"} onPress={handleProceed} />
        <Spacer height={30} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
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
