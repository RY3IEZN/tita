/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const { width, height } = Dimensions.get("screen");

function SecurityPage(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Security"} />
      <Spacer height={10} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText theText={"Remember me"} />
        <Switch />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText theText={"Biometric ID"} />
        <Switch />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText theText={"Touch Id"} />
        <Switch trackColor={"orange"} thumbColor={"white"} />
      </View>
      <Spacer height={10} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText theText={"Two-Factor Authentication"} />
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color="#4361ee"
        />
      </View>
      <Spacer height={25} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.btn}>
          <AppText
            theText={"Change Pin"}
            color={"#4361ee"}
            fontSize={15}
            fontWeight={"500"}
          />
        </TouchableOpacity>
        <Spacer height={15} />
        <TouchableOpacity style={styles.btn}>
          <AppText
            theText={"Change Password"}
            color={"#4361ee"}
            fontSize={15}
            fontWeight={"500"}
          />
        </TouchableOpacity>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  btn: {
    height: 55,
    width: width * 0.85,
    backgroundColor: "#e1e8fe",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SecurityPage;
