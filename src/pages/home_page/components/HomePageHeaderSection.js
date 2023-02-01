/** @format */

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";

function HomePageHeaderSection(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <AppText fontSize={25} fontWeight={"600"} theText={"TITA"} />
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../../../assets/icons/profile-circle.png")}
        />
        <Spacer width={10} />
        <Image
          source={require("../../../../assets/icons/notification-status.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomePageHeaderSection;
