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

const { width, height } = Dimensions.get("screen");

function WelcomeScreen(props) {
  const [fontsLoaded] = useFonts({
    lato: require("../../../assets/fonts/Lato-Regular.ttf"),
    moondance: require("../../../assets/fonts/MoonDance-Regular.ttf"),
    inter: require("../../../assets/fonts/Inter-Regular.ttf"),
    poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../../assets/icons/welcomepage.png")} />
      </View>

      <View style={{ marginHorizontal: 25, marginRight: 50 }}>
        <Text
          style={{ fontFamily: "poppins", fontSize: 30, fontWeight: "700" }}
        >
          Welcome
        </Text>
        <View style={{ marginHorizontal: 2 }}>
          <Text
            style={{
              fontFamily: "inter",
              fontSize: 14,
              fontWeight: "200",
              lineHeight: 22,
            }}
          >
            Make Transactions on your Phone, Whenever, Wherever with TITA.
          </Text>
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
        <TouchableOpacity>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </View>
        </TouchableOpacity>
        {/* create account */}
        <TouchableOpacity>
          <View style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    marginHorizontal: 50,
    marginVertical: height * 0.15,
  },
  loginBtn: {
    borderWidth: 1,
    height: 45,
    width: 170,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
  },
  loginBtnText: {
    color: "#4361EE",
    fontFamily: "lato",
    fontSize: 16,
    fontWeight: "bold",
  },
  createBtn: {
    backgroundColor: "#4361EE",
    height: 45,
    width: 170,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
  },
  createBtnText: {
    color: "white",
    fontFamily: "lato",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
