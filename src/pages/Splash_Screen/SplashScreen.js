/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Titamainlogo from "../../../assets/svg/Titamainlogo";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { updateApiSauceSettings } from "../../api/ApiClient";

const { width, height } = Dimensions.get("screen");

function SplashScreen({ navigation }) {
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const value = await SecureStore.getItemAsync("tokenId");
    if (value) {
      // Do something with the retrieved value
      console.log(value, "+++++++++++++++++=");
      await updateApiSauceSettings(value);
      navigation.replace("NestedTabs", { screen: "Home" });
    } else {
      // No value found for the given key
      console.log("No value found for the given key");
      navigation.navigate("onboarding");
    }
  };

  return (
    <View style={styles.container}>
      <Titamainlogo />
      <TouchableOpacity
        style={{
          marginVertical: 20,
          height: 65,
          width: "80%",
          backgroundColor: "#229879",
          marginHorizontal: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        // onPress={() => navigation.navigate("NestedTabs", { screen: "home" })}
        // replace navigate with replace when live
        onPress={() => navigation.navigate("loginpage")}
      >
        <Text style={{ fontWeight: "700", color: "black", fontSize: 20 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
