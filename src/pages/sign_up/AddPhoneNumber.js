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

const { width, height } = Dimensions.get("screen");

function AddPhoneNumber({ navigation, route }) {
  const {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    date_of_birth,
    account_type,
  } = route.params;

  console.log(account_type);
  console.log(first_name, "ghghghghh");

  return (
    <AppContainerView>
      <Header headerTitle={"Add Phone Number"} />
      <View style={{ alignItems: "center" }}>
        <Spacer height={10} />
        <PageIndicator pageIndex={3} />
        <Spacer height={15} />
        <AppText theText={"We’ll need to confirm it by sending a text."} />
        <Spacer height={20} />
        <Image source={require("../../../assets/icons/phoneshownotp.png")} />
        <Spacer height={50} />
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="diving-scuba-flag"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Username" style={{ width: width * 0.75 }} />
        </View>
        <Spacer height={50} />
        <AppButton AppBtnText={"Procced"} />
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
