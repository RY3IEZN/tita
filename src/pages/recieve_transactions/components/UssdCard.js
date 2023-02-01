/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import AppText from "../../components/AppText";

const { width, height } = Dimensions.get("screen");

function UssdCard({ imgSource, detail }) {
  return (
    <View
      style={{
        width: width * 0.9,
        height: 35,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Image source={detail.img} />
      <AppText theText={detail.name} />
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
          height: 44,
          width: 100,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#4361EE",
          backgroundColor: "#4361EE",
        }}
      >
        <AppText
          theText={"Dial"}
          color={"white"}
          fontSize={20}
          fontWeight={"bold"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UssdCard;
