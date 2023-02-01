/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

const { width, height } = Dimensions.get("screen");

function OnboardingScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    lato: require("../../../assets/fonts/Lato-Regular.ttf"),
    moondance: require("../../../assets/fonts/MoonDance-Regular.ttf"),
    inter: require("../../../assets/fonts/Inter-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        paginationStyle={{ bottom: height * 0.2, right: width * 0.7 }}
      >
        {/* Slide 1 */}
        <View style={styles.slide1}>
          <Image
            source={require("../../../assets/icons/onboard1.png")}
            style={{ marginTop: 100 }}
          />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.text}>Send Money</Text>
          </View>

          <View style={{ marginHorizontal: 20, margin: 17 }}>
            <Text style={styles.subText}>
              Send money to all networks and banks with assured security right
              from where you are.{" "}
            </Text>
          </View>
          <View style={{ marginLeft: width * 0.5, marginTop: 40 }}>
            <Text style={{ color: "#4361ee", fontWeight: "500" }}>Skip</Text>
          </View>
        </View>

        {/* slide2 */}
        <View style={styles.slide1}>
          <Image
            source={require("../../../assets/icons/onboard2.png")}
            style={{ marginTop: 100 }}
          />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.text}>Pay Bills</Text>
          </View>

          <View style={{ marginHorizontal: 20, margin: 10 }}>
            <Text style={styles.subText}>
              Pay Bills such as Electricity, Water bill, TV subscriptions etc.
              Buy airtime & Bundles.
            </Text>
          </View>
          <View style={{ marginLeft: width * 0.5, marginTop: 69 }}>
            <Text style={{ color: "#4361ee", fontWeight: "500" }}>Skip</Text>
          </View>
        </View>
        {/* slide3 */}
        <View style={styles.slide1}>
          <Image
            source={require("../../../assets/icons/onboard3.png")}
            style={{ marginTop: 100 }}
          />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.text}>Great Experience</Text>
          </View>

          <View style={{ marginHorizontal: 20, margin: 10 }}>
            <Text style={styles.subText}>
              Great Experience with our Fintech App. We are here to satisfy you
              in all possible ways.
            </Text>
            <TouchableOpacity onPress={navigation.navigate("welcomepage")}>
              <Image
                source={require("../../../assets/icons/edgestart.png")}
                style={{
                  position: "relative",
                  left: width * 0.72,
                  top: height * 0.16,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "moondance",
    lineHeight: 22,
  },
  subText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "inter",
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default OnboardingScreen;
