/** @format */

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";

function RequestVirtualCardFeatures({ title, subTitle, Svg_img }) {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          width: "87%",
        }}
      >
        {Svg_img}
        <Spacer width={10} />
        <View>
          <AppText theText={title} fontSize={15} fontWeight={"bold"} />
          <AppText theText={subTitle} fontSize={14} fontWeight={"300"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RequestVirtualCardFeatures;
