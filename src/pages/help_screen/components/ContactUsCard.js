/** @format */

import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";

const { width, height } = Dimensions.get("screen");

function ContactUsCard({ cardTitleText, imgSource }) {
  return (
    <View
      style={{
        height: 60,
        width: width * 0.85,
        borderColor: "#dddddd",
        borderWidth: 2,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Spacer width={10} />
      <Image source={imgSource} />
      <Spacer width={10} />
      <AppText theText={cardTitleText} fontWeight={"600"} fontSize={14} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactUsCard;
