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
      <LinearGradient
        colors={["#4361EE", "#FC466B"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        <View
          style={{
            marginVertical: height * 0.4,
            marginHorizontal: width * 0.35,
          }}
        >
          <Image source={require("../../../assets/icons/titaLogo.png")} />
        </View>
      </LinearGradient>
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
  },
});

export default SplashScreen;
