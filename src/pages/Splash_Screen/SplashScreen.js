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
// import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("screen");

function SplashScreen({ navigation }) {
  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // const checkLoginStatus = async () => {
  //   try {
  //     const storedToken = await AsyncStorage.getItem("bearerToken");
  //     const isLoggedIn = storedToken !== null;

  //     // Navigate to the appropriate screen based on login status
  //     if (isLoggedIn) {
  //       // User is logged in, navigate to the home screen
  //       navigation.navigate("Home");
  //     } else {
  //       // User is not logged in, navigate to the login screen
  //       navigation.navigate("Login");
  //     }
  //   } catch (error) {
  //     console.log("Error retrieving stored token:", error);
  //     // Handle the error
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/icons/titaiconnew.png")} />
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
