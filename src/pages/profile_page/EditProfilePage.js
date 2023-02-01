/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import CustomeTextInputField from "./components/CustomeTextInputField";

const { width, height } = Dimensions.get("screen");

function EditProfilePage({ navigation }) {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <AppContainerView>
          <Header headerTitle={"Edit account details"} />
          {/* profilepic */}
          <View style={styles.profilePicSection}>
            <View style={styles.profilePic}></View>
            <Image
              source={require("../../../assets/icons/camerabtn.png")}
              style={{ height: 15, width: 15, marginTop: 80 }}
            />
          </View>
          {/* forms */}
          <View style={styles.formSection}>
            {/* firstname */}
            <CustomeTextInputField
              inputTitle={"Firstname"}
              inputfieldIcon="account-circle-outline"
            />
            {/* Lastname */}
            <CustomeTextInputField
              inputTitle={"Lastname"}
              inputfieldIcon={"account-circle-outline"}
            />
            {/* DOB */}
            <CustomeTextInputField
              inputTitle={"Date of birth"}
              inputfieldIcon={"calendar"}
            />
            {/* Email */}
            <CustomeTextInputField
              inputTitle={"Email Address"}
              inputfieldIcon={"email-outline"}
            />
            {/* Phone Number */}
            <CustomeTextInputField
              inputTitle={"Phone Number"}
              inputfieldIcon={"phone"}
            />
            {/* Password */}
            <CustomeTextInputField
              inputTitle={"Password"}
              inputfieldIcon={"lock-outline"}
            />
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <AppButton AppBtnText="Update" />
          </View>
        </AppContainerView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},
  profilePic: {
    borderWidth: 1,
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicSection: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formSection: {
    marginHorizontal: 22,
    marginVertical: 15,
  },
});

export default EditProfilePage;
