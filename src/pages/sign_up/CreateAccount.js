/** @format */

import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import Checkbox from "expo-checkbox";
import Spacer from "../components/Spacer";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native";
import PageIndicator from "../components/PageIndicator";

const { width, height } = Dimensions.get("screen");

function CreateAccount({ navigation }) {
  return (
    <AppContainerView>
      <View style={{ alignItems: "center" }}>
        <Header headerTitle={"Create Account"} />
        <PageIndicator />
        <Spacer height={10} />
        {/* firstname */}
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Firstname" style={{ width: width * 0.75 }} />
        </View>
        {/* lastname */}
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Lastname" style={{ width: width * 0.75 }} />
        </View>
        {/* date of birth */}
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons name="calendar" size={24} color="#4361EE" />
          </View>
          <TextInput
            placeholder="Date of birth"
            style={{ width: width * 0.75 }}
          />
        </View>
        {/* email address */}
        <View style={styles.textInputBox}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Username" style={{ width: width * 0.75 }} />
        </View>
        {/* password */}
        <View style={styles.textInputBox2}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Password" style={{ width: width * 0.63 }} />

          <MaterialCommunityIcons name="eye-off" size={24} color="#4361EE" />
        </View>
        {/* password */}
        <View style={styles.textInputBox2}>
          <View style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color="#4361EE"
            />
          </View>
          <TextInput placeholder="Password" style={{ width: width * 0.63 }} />

          <MaterialCommunityIcons name="eye-off" size={24} color="#4361EE" />
        </View>
        <Spacer height={25} />

        <AppButton AppBtnText={"Register"} />
        <Spacer height={25} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Checkbox value color={"blue"} />
          <Spacer width={10} />
          <AppText
            theText={
              "I allow Tita to use this phone number for login and communication purposes."
            }
          />
        </View>
        <Spacer height={height * 0.11} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText theText={"Already have an account?"} />
          <Spacer width={5} />
          <TouchableOpacity onPress={() => navigation.navigate("loginpage")}>
            <AppText
              theText={"Login"}
              color={"#3862F8"}
              textDecorationLine={"underline"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox: {
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  textInputBox2: {
    marginTop: 15,
    marginVertical: 10,
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CreateAccount;
