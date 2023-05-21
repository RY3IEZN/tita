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
import Splashscreen1 from "../../../assets/svg/Splashscreen1";
import Onboarding2 from "../../../assets/svg/Onboarding2";
import Onboarding3 from "../../../assets/svg/Onboarding3";

const { width, height } = Dimensions.get("screen");

function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        paginationStyle={{ bottom: height * 0.2, right: width * 0.7 }}
      >
        {/* Slide 1 */}
        <View style={styles.slide1}>
          <Splashscreen1 />
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
          <Onboarding2 />
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
          <Onboarding3 />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.text}>Great Experience</Text>
          </View>

          <View style={{ marginHorizontal: 20, margin: 10 }}>
            <Text style={styles.subText}>
              Great Experience with our Fintech App. We are here to satisfy you
              in all possible ways.
            </Text>
          </View>
        </View>
      </Swiper>
      <TouchableOpacity>
        <Image
          source={require("../../../assets/icons/edgestart.png")}
          style={{
            position: "absolute",
            bottom: 0,
            right: -10,
          }}
        />
      </TouchableOpacity>
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
    marginTop: 210,
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
    lineHeight: 22,
  },
  subText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default OnboardingScreen;
