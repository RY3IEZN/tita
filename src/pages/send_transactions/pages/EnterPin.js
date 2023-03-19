/** @format */

import React from "react";
import { useState } from "react";
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppSoftButton from "../../components/AppSoftButton";
import AppText from "../../components/AppText";
import LineDivider from "../../components/LineDivider";
import Otp from "../../components/Otp";
import Spacer from "../../components/Spacer";

const { width, height } = Dimensions.get("screen");

function EnterPin(props) {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <AppContainerView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Spacer height={15} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.amountCard}>
            <Spacer height={10} />
            {/* paying to */}
            <View style={{ flexDirection: "row" }}>
              <Spacer width={15} />
              <AppText theText={"Paying to"} />
            </View>
            {/* reciver details from previous page */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <AppSoftButton />
                <View>
                  <AppText theText={"Aliyu victor"} />
                  <AppText theText={"0987654321"} />
                </View>
              </View>
              <AppText theText={"20,000,000,000,000"} fontSize={15} />
            </View>
            {/* Debit From */}
            <Spacer height={15} />
            <View style={{ flexDirection: "row" }}>
              <Spacer width={15} />
              <AppText theText={"Debit From"} />
            </View>
            {/* the acconunt to debit from as choosen from the previous page and can be changed at this point */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 25,
              }}
            >
              <Image
                source={require("../../../../assets/icons/savingsaccoubticon.png")}
              />
              <Spacer width={10} />
              <View>
                <AppText theText={"Savings account(xxx..12345)"} />
                <TouchableOpacity>
                  <AppText theText={"Change"} color={"blue"} />
                </TouchableOpacity>
              </View>
            </View>
            <Spacer height={20} />
            <LineDivider />
            {/* descritpion */}
            <Spacer height={10} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <AppText theText={"food bill"} />
            </View>
          </View>
        </View>
        <Spacer height={50} />

        {isVerified === true ? <Otp /> : ""}
        <AppButton
          AppBtnText={isVerified === true ? "Send" : "Procced"}
          onPress={
            isVerified === true
              ? () => console.log("moneysent")
              : () => setIsVerified(true)
          }
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  amountCard: {
    height: height * 0.27,
    width: width * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
  },
});

export default EnterPin;
