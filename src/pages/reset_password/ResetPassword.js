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

const { width, height } = Dimensions.get("screen");

function ResetPassword(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Reset Password"} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../../../assets/icons/resetpassword.png")}
          style={{ height: 330, width: 350 }}
        />
      </View>
      <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "500" }}>
        Enter your email address to receive 6 digit code to reset password.
      </Text>
      {/* phone number */}
      <View style={styles.textInputBox}>
        <View style={{ marginHorizontal: 10 }}>
          <MaterialCommunityIcons name="flag" size={24} color="#4361EE" />
        </View>
        <TextInput
          placeholder="+2348012345678"
          style={{ width: width * 0.75 }}
        />
      </View>
      <AppButton AppBtnText={"Procced"} />
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
    width: width * 0.9,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ResetPassword;
