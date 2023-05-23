/** @format */

import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
import AppText from "../components/AppText";
import { RadioButton } from "react-native-paper";
import Header from "../components/Header";
import PageIndicator2 from "../components/PageIndicator2";

function KycPage1(props) {
  return (
    <>
      <Spacer height={40} />
      <Header headerTitle={"KYC Form"} canGoBack />
      <Spacer height={10} />
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <PageIndicator2 pageIndex={1} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          width: 500,
          height: 65,
          backgroundColor: "#305af9",
          overflow: "visible",
          justifyContent: "center",
          paddingHorizontal: 30,
          elevation: 20,
          shadowColor: "#4361EE",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 2,
        }}
      >
        <AppText theText={"B. Next Of Kin"} color={"white"} fontSize={24} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Spacer height={20} />
        <AppText theText={"Next of Kin"} />
        <Spacer height={10} />
        <View
          style={{
            width: 370,
            backgroundColor: "#F4F4F4",
            height: 60,
            justifyContent: "center",
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <TextInput placeholder="Next of Kin" />
        </View>
        <Spacer height={20} />
        {/* gender and maritial status */}
        <View
          style={{
            /* backgroundColor: "red", */ height: 100,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <AppText theText={"Gender"} />
              {/* male radiobtn */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <RadioButton />
                <AppText theText={"Male"} />
              </View>
              {/* female radiobtn */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <RadioButton />
                <AppText theText={"Female"} />
              </View>
            </View>
            {/* ss */}
            <Spacer width={50} />
            <View>
              <AppText theText={"Marital Status"} />
              {/* male radiobtn */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <RadioButton />
                <AppText theText={"Married"} />
              </View>
              {/* female radiobtn */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <RadioButton />
                <AppText theText={"Single"} />
              </View>
            </View>
          </View>
        </View>
        <Spacer height={15} />
        {/* relationship */}
        <AppText theText={"Relationship"} />
        <Spacer height={10} />
        <View
          style={{
            width: 370,
            backgroundColor: "#F4F4F4",
            height: 60,
            justifyContent: "center",
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <TextInput placeholder="Relationship" />
        </View>
        <Spacer height={20} />
        <AppText theText={"Address"} />
        <View
          style={{
            width: 370,
            backgroundColor: "#F4F4F4",
            height: 60,
            justifyContent: "center",
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <TextInput placeholder="Address" />
        </View>
        <Spacer height={10} />
        <AppText theText={"Phone Number"} />
        <View
          style={{
            width: 370,
            backgroundColor: "#F4F4F4",
            height: 60,
            justifyContent: "center",
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <TextInput placeholder="Phone Number" />
        </View>
        <Spacer height={30} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AppButton AppBtnText={"Next"} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default KycPage1;
