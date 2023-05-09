/** @format */

import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../../components/AppContainerView";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import LineDivider from "../../components/LineDivider";
import Spacer from "../../components/Spacer";
import CustomeTextInputField from "../../profile_page/components/CustomeTextInputField";
import CustomeTextInputField2 from "../../recieve_transactions/components/CustomTextInputField2";
import AppPicker from "../../components/AppPicker";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";

const { width, height } = Dimensions.get("screen");

function SendAirtime(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Send Airtime to"} />
      <Spacer height={20} />
      {/* selected service provider */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#F2F2F2",
            borderRadius: 50,
            width: 70,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../../../../assets/icons/glo.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/mtn.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/airtel.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/9mobile.png")} />
        </TouchableOpacity>
      </View>
      <Spacer height={20} />
      <LineDivider height={1} />
      {/* select/input phone no */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Spacer height={10} />
        <CustomeTextInputField2 placeholder={"Phone Number"} />
      </View>
      {/* select Amount */}
      <Spacer height={30} />
      <View style={{ flexDirection: "row" }}>
        <Spacer width={25} />
        <AppText theText={"Amount"} />
      </View>
      <Spacer height={5} />

      <AppPicker defaultTitle={"Please Select"} />
      {/* app button */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Spacer height={40} />
        <AppButton AppBtnText={"Next"} onPress={() => console.log("next")} />
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
    marginVertical: 15,
  },
});

export default SendAirtime;
