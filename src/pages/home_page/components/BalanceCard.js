/** @format */

import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddMoneyBtn from "./AddMoneyBtn";

const { width, height } = Dimensions.get("screen");

function BalanceCard(props) {
  return (
    <View style={{ alignItems: "center" }}>
      <ImageBackground
        source={require("../../../../assets/icons/customshape.png")}
        resizeMode="cover"
        style={{
          width: width * 0.9,
          height: height * 0.2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 180,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#597bf8",
            }}
          ></View>
          <Spacer height={10} />
          <View style={{ flexDirection: "row" }}>
            <AppText
              theText={"N400,000"}
              color={"white"}
              fontSize={20}
              fontWeight={"bold"}
            />
            <Spacer width={10} />
            <MaterialCommunityIcons
              name="eye-off-outline"
              color={"white"}
              size={30}
            />
          </View>
        </View>
        <Spacer width={50} />
        {/* addmoney */}
        <View style={{ alignItems: "center" }}>
          <AddMoneyBtn />
          <Spacer height={10} />
          <AppText color={"white"} fontWeight={"bold"} theText={"Add Money"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BalanceCard;
