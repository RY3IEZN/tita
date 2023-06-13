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
  const [profileDetails, setProfileDetails] = useState([]);

  const getUserApi = UseApi(ProfileApi.get_profile);

  useEffect(() => {
    if (getUserApi.data && getUserApi.statusCode) {
      setProfileDetails(getUserApi.data);
      console.log(profileDetails);
    }
  }, [getUserApi.data, profileDetails]);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const value = await SecureStore.getItemAsync("tokenId");
    if (value) {
      // Do something with the retrieved value
      console.log(value, "+++++++++++++++++=");
      await updateApiSauceSettings(value);
      getUserApi.makeRequest();
    }
    if (
      profileDetails.message !== "Unauthenticated." &&
      profileDetails.message !== undefined
    ) {
      navigation.replace("NestedTabs", { screen: "Home" });
      console.log("do this");
    } else {
      // No value found for the given key
      console.log("do that");
      console.log("No value found for the given key");
      Alert.alert("Oops...", "Session has expired due to inactivity");
      navigation.navigate("onboarding");
    }
  };

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
