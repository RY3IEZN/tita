/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";

function HomePageHeaderSection({
  navigation,
  navigateToProfilePage,
  navigateToNotificationPage,
}) {
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
        <TouchableOpacity onPress={navigateToProfilePage}>
          <Image
            source={require("../../../../assets/icons/profile-circle.png")}
          />
        </TouchableOpacity>
        <Spacer width={10} />
        <TouchableOpacity onPress={navigateToNotificationPage}>
          <Image
            source={require("../../../../assets/icons/notification-status.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomePageHeaderSection;
