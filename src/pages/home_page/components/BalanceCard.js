/** @format */

import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddMoneyBtn from "./AddMoneyBtn";
import UseApi from "../../../api/UseApi";
import ProfileApi from "../../../api/user/ProfileApi";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

function BalanceCard({ addMoneyonPress, navigation }) {
  const isFocused = useIsFocused();
  const [walletDetails, setWalletDetails] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [profileDetails, setProfileDetails] = useState([]);

  const getUserWalletApi = UseApi(ProfileApi.get_wallets);
  const getUserApi = UseApi(ProfileApi.get_profile);

  useEffect(() => {
    getUserWalletApi.makeRequest();
  }, []);

  useEffect(() => {
    if (getUserWalletApi.data && getUserWalletApi.statusCode) {
      setWalletDetails(getUserWalletApi.data);
    }
  }, [getUserWalletApi.data]);

  useEffect(() => {
    getUserApi.makeRequest();
  }, []);

  useEffect(() => {
    if (getUserApi.data && getUserApi.statusCode) {
      setProfileDetails(getUserApi.data);
    }
  }, [getUserApi.data, profileDetails]);

  const accountNumber = profileDetails.account_number
    ? profileDetails.account_number.toString()
    : "";

  useEffect(() => {
    if (isFocused) {
      // Perform the necessary actions or fetch data on focus
      // This code will run whenever the screen is focused on
      // You can reload or re-render the page here
      getUserWalletApi.makeRequest();
      console.log("Screen is focused");
    }
  }, [isFocused]);

  return (
    <View style={{ alignItems: "center" }}>
      <ImageBackground
        source={require("../../../../assets/icons/customshape.png")}
        resizeMode="cover"
        style={{
          width: width * 0.95,
          height: height * 0.2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 210,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#597bf8",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../assets/icons/Wallet.png")}
              style={{ width: 30, height: 30 }}
            />
            <Spacer width={5} />
            <AppText
              theText={
                profileDetails == "" ? (
                  <ActivityIndicator />
                ) : (
                  `- ${"xxxx" + accountNumber.slice(-3)}`
                )
              }
              color={"white"}
              fontSize={20}
              fontWeight={"bold"}
            />
            <Spacer width={5} />
            <MaterialCommunityIcons
              name={"chevron-down"}
              size={25}
              color={"white"}
            />
          </View>
          <Spacer height={10} />
          <View style={{ flexDirection: "row" }}>
            {isVisible ? (
              <AppText
                theText={
                  walletDetails == "" ? (
                    <ActivityIndicator />
                  ) : (
                    "N" + walletDetails[0].balance
                  )
                }
                color={"white"}
                fontSize={20}
                fontWeight={"bold"}
              />
            ) : (
              <AppText
                theText={"\u2b24 \u2b24 \u2b24 \u2b24 \u2b24"}
                color={"white"}
                fontSize={20}
                fontWeight={"bold"}
              />
            )}
            <Spacer width={10} />
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <MaterialCommunityIcons
                name={isVisible ? "eye-off-outline" : "eye-outline"}
                color={"white"}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Spacer width={40} />
        {/* addmoney */}
        <View style={{ alignItems: "center" }}>
          <AddMoneyBtn onPress={addMoneyonPress} />
          <Spacer height={10} />
          <AppText
            color={"white"}
            fontWeight={"bold"}
            theText={"Add Money"}
            fontSize={12}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BalanceCard;
