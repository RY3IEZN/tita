/** @format */

import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

function Language(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Language"} />
      <Spacer height={30} />
      <View style={styles.searchBoxSection}>
        <View style={styles.searchBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Spacer width={5} />
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color={"#8e8e93"}
            />
            <Spacer width={5} height={5} />
            <TextInput placeholder="Search" style={{ width: width * 0.6 }} />
          </View>
          <View>
            <MaterialCommunityIcons
              name="microphone"
              size={20}
              color={"#8e8e93"}
            />
          </View>
        </View>
        <Spacer width={10} />
        <AppText
          theText={"Cancel"}
          color={"#4361ee"}
          fontSize={15}
          fontWeight={"500"}
        />
      </View>
      <AppText theText={"Select Language"} color={"#8e8e93"} />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  searchBoxSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    width: width * 0.74,
    backgroundColor: "#7676801F",
    height: 40,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Language;
