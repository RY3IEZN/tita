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

const { width, height } = Dimensions.get("screen");

function SplashScreen({ navigation }) {
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
