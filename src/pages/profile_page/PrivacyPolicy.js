/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

function PrivacyPolicy(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Privacy Policy"} />
      <Spacer height={15} />
      <AppText theText={"Terms of service"} fontSize={24} fontWeight={"500"} />
      <Spacer height={15} />
      <AppText
        theText={
          "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch with the central office via their notebooks. At home, we rely on our desktops and notebooks to do our shopping, to entertain us, and to keep us abreast of world events. We may not see our email servers, but we count on them to deliver our email whenever and wherever we want it. Our PDAs keep track of our hectic schedules, our to-do lists, our contact lists, Even though computer hardware is central to almost"
        }
        fontSize={14}
        fontWeight={"400"}
        // textAlign={"left"}
        lineHeight={21}
        color={"#323232"}
      />
      <Spacer height={15} />
      <AppText theText={"Privacy Policy"} fontSize={24} fontWeight={"500"} />
      <AppText
        theText={
          "Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch with the central office via their notebooks. At home, we rely on our desktops and notebooks to do our shopping, to entertain us, and to keep us"
        }
        fontSize={14}
        fontWeight={"400"}
        // textAlign={"left"}
        lineHeight={21}
        color={"#323232"}
      />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PrivacyPolicy;
