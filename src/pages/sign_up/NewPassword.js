/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import LoginPageSvg from "../../../assets/svg/LoginPageSvg";

const { width, height } = Dimensions.get("screen");

function NewPassword(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"New Password"} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <LoginPageSvg />
        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "500" }}>
          Enter a new password{" "}
        </Text>
        {/* password */}
        <View style={styles.textInputBox1}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Password" style={{ width: width * 0.7 }} />
          <MaterialCommunityIcons name="eye-off" size={24} color="#4361EE" />
        </View>
        {/* confirm password */}
        <View style={styles.textInputBox2}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput
            placeholder="Confirm Password"
            style={{ width: width * 0.7 }}
          />

          <MaterialCommunityIcons name="eye-off" size={24} color="#4361EE" />
        </View>
      </View>
      <AppButton AppBtnText={"Procced to Login"} />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox1: {
    marginTop: 20,
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  textInputBox2: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NewPassword;
