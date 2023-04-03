/** @format */

import React from "react";
import { Image, ImageBackground } from "react-native";
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
import Confirmationblockgrey from "../../../../assets/svg/confirmationblockgrey";
import BalanceCard from "../../home_page/components/BalanceCard";
import Nairacardsvg from "../../../../assets/svg/nairacardsvg";

const { width, height } = Dimensions.get("screen");

function SendAirtimeConfirmation(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Confirmation"} />
      <AppText theText={"Send Airtime to"} />
      <ImageBackground
        source={require("../../../../assets/icons/Rectangle.png")}
        style={{ width: "100%", height: 200, flex: 1 }}
        resizeMode="contain"
      >
        <View style={styles.cardView}>
          {/* uppersection */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <AppText
                theText={"Phone Number"}
                color={"white"}
                fontWeight={"bold"}
              />
              <AppText theText={"08100932839"} color={"white"} />
            </View>
            <View>
              <AppText
                theText={"Network"}
                fontSize={12}
                color={"white"}
                fontWeight={"bold"}
              />
              <AppText
                theText={"Airtel"}
                fontSize={12}
                color={"white"}
                textAlign={"right"}
              />
            </View>
          </View>
          <Spacer height={25} />
          {/* lowersectionA */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Nairacardsvg />
            <View>
              <AppText
                theText={"Amount"}
                color={"white"}
                fontWeight={"bold"}
                textAlign={"right"}
              />
              <AppText theText={"N5,000,000"} color={"white"} />
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* selct account */}
      <AppText theText={"Select account"} />
      <ImageBackground
        source={require("../../../../assets/icons/Rectangle2.png")}
        style={{ width: "100%", height: 210, flex: 1 }}
        resizeMode="contain"
      >
        <View style={styles.cardView}>
          {/* uppersection */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <AppText
                theText={"Phone Number"}
                color={"white"}
                fontWeight={"bold"}
              />
              <AppText theText={"08100932839"} color={"white"} />
            </View>
            <View>
              <AppText
                theText={"Status"}
                fontSize={12}
                color={"white"}
                textAlign={"right"}
              />
              <AppText
                theText={"Active"}
                fontSize={15}
                color={"white"}
                fontWeight={"bold"}
              />
            </View>
          </View>
          <Spacer height={25} />
          {/* lowersectionA */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 7,
            }}
          >
            <View>
              <AppText theText={"Balance"} color={"white"} />
              <AppText
                theText={"N5,000,000"}
                color={"white"}
                fontSize={15}
                fontWeight={"bold"}
                lineHeight={15}
              />
            </View>
            <View>
              <AppText
                theText={"Amount"}
                color={"white"}
                fontWeight={"bold"}
                textAlign={"right"}
                fontSize={12}
              />
              <AppText
                theText={"Tier 3 Account"}
                color={"white"}
                fontSize={12}
              />
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* enter pin */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomeTextInputField2 placeholder={"Enter Pin"} />
        <AppButton AppBtnText={"Confirm"} />
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
  cardView: {
    width: 365,
    height: 120,
    // backgroundColor: "red",
    position: "absolute",
    top: 25,
    left: 5,
    padding: 15,
  },
});

export default SendAirtimeConfirmation;
