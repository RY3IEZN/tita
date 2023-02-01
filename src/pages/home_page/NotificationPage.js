/** @format */

import React from "react";
import { View, StyleSheet, Image, Switch } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

function NotificationPage(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Notification"} />
      <Spacer height={100} />
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../../assets/icons/notifiation.png")} />
        <AppText theText={"Empty"} color={"#888888"} fontSize={22} />
        <AppText
          theText={"No notifcation yet"}
          color={"#888888"}
          fontSize={17}
        />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NotificationPage;
