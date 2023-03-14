/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Spacer from "./Spacer";
import AppText from "./AppText";

function AppSoftCards({ cardTitle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: height * 0.1,
          width: width * 0.85,
          borderRadius: 25,
          backgroundColor: "white",
          marginHorizontal: 10,
          marginTop: 10,
          elevation: 10,
          shadowColor: "#3862F8",
          shadowOpacity: 0.5,
          flexDirection: "row",
          shadowOffset: {
            width: 10,
            height: 10,
          },
          shadowRadius: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          {cardTitle == "Transfer voucher" ? (
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={24}
              color="black"
            />
          ) : (
            <Image source={require("../../../assets/icons/nairasign.png")} />
          )}

          <Spacer width={10} />
          <AppText theText={cardTitle} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={35}
            color={"#3862F8"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppSoftCards;
