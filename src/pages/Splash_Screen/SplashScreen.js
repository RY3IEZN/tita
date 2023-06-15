/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Titamainlogo from "../../../assets/svg/Titamainlogo";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { updateApiSauceSettings } from "../../api/ApiClient";
import ProfileApi from "../../api/user/ProfileApi";
import UseApi from "../../api/UseApi";

const { width, height } = Dimensions.get("screen");

function SplashScreen({ navigation }) {
  const getUserApi = UseApi(ProfileApi.get_profile);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const tokenId = await SecureStore.getItemAsync("tokenId");

    if (tokenId) {
      await updateApiSauceSettings(tokenId);
      navigation.replace("NestedTabs", { screen: "Home" });
    } else {
      const hasVisitedOnboarding = await SecureStore.getItemAsync(
        "hasVisitedOnboarding"
      );

      if (!hasVisitedOnboarding) {
        navigateToOnboarding();
        await SecureStore.setItemAsync("hasVisitedOnboarding", "true");
      } else {
        navigateToWelcomeScreen();
        console.log("has_visited_before");
      }
    }
  };

  const navigateToOnboarding = () => {
    navigation.navigate("onboarding");
  };

  const navigateToWelcomeScreen = () => {
    navigation.navigate("welcomepage");
  };

  useEffect(() => {
    if (getUserApi.data && getUserApi.statusCode) {
      if (getUserApi.data.message === "Unauthenticated." || undefined) {
        Alert.alert("Oops...", "Session has expired due to inactivity");
        navigateToWelcomeScreen();
      }
    }
  }, [getUserApi.data, getUserApi.statusCode]);

  return (
    <View style={styles.container}>
      <Titamainlogo />
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
