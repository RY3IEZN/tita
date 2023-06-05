/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import Welcomepagesvg from "../../../assets/svg/Welcomepagesvg";
import AppText from "../components/AppText";

const { width, height } = Dimensions.get("screen");

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Welcomepagesvg />
      </View>

      <View style={{ marginHorizontal: 25, marginRight: 50 }}>
        <AppText theText={"Welcome"} fontSize={30} fontWeight={"700"} />
        <View style={{ marginHorizontal: 2 }}>
          <AppText
            theText={
              "Make Transactions on your Phone, Whenever, Wherever with TITA."
            }
          />
        </View>
      </View>

      {/* buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginVertical: 30,
        }}
      >
        {/* loginbtn */}
        <TouchableOpacity onPress={() => navigation.replace("loginpage")}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </View>
        </TouchableOpacity>
        {/* create account */}
        <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
          <View style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    marginHorizontal: 50,
    marginVertical: height * 0.15,
  },
  loginBtn: {
    borderWidth: 1,
    height: 45,
    width: 180,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
  },
  loginBtnText: {
    color: "#4361EE",
    fontSize: 16,
    fontWeight: "bold",
  },
  createBtn: {
    backgroundColor: "#4361EE",
    height: 45,
    width: 180,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
  },
  createBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
