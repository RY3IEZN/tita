/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import Resetpassword from "../../../assets/svg/resetpassword";
import AppText from "../components/AppText";

const { width, height } = Dimensions.get("screen");

function ResetPassword(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Reset Password"} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Resetpassword />
      </View>
      <AppText
        theText={
          "Enter your email address to receive 6 digit  code to reset password."
        }
        textAlign={"center"}
        fontSize={14}
        fontWeight={"500"}
      />
      {/* email */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Email" style={{ width: width * 0.75 }} />
        </View>
        <AppButton AppBtnText={"Procced"} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox: {
    marginTop: 20,
    marginBottom: 24,
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ResetPassword;
