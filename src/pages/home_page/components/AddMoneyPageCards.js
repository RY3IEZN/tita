/** @format */

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import Spacer from "../../components/Spacer";
import AppText from "../../components/AppText";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

function AddMoneyPageCards({ title, subTitle, imgUrl, onPress }) {
  return (
    <View
      style={{
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 10,
        shadowColor: "grey",
        shadowOpacity: 0.5,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image source={imgUrl} />
        <Spacer width={10} />
        <View>
          <AppText theText={title} fontSize={15} fontWeight={"600"} />
          <AppText theText={subTitle} fontSize={11} fontWeight={"500"} />
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons name="chevron-right" color={"blue"} size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AddMoneyPageCards;
