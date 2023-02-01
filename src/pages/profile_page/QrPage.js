/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import ProfileCards from "./components/ProfileCards";

function QrPage(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"My QR Code"} />
      <ProfileCards
        title={"Scan to Credit"}
        subtitle={"Receive money in your account by"}
        subtitle2={"scanning QR code"}
        imageSource={require("../../../assets/icons/receive-square.png")}
      />
      <Spacer height={20} />
      <ProfileCards
        title={"Scan to Debit"}
        subtitle={"Pay merchants with QR code"}
        imageSource={require("../../../assets/icons/send-square.png")}
      />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default QrPage;
