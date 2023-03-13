/** @format */

import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../../components/AppContainerView";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

function SendAirtime(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Send Airtime"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/glo.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/mtn.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/airtel.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../../../assets/icons/9mobile.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.textInputBox}>
        <View style={{ marginHorizontal: 10 }}>
          <MaterialCommunityIcons name="magnify" size={24} />
        </View>
        <TextInput placeholder="name" style={{ width: width * 0.75 }} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox: {
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
});

export default SendAirtime;
