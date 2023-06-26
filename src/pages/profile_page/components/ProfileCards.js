/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";

function ProfileCards({ title, subtitle, imageSource, subtitle2, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 65,
              width: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              backgroundColor: "white",
              marginHorizontal: 10,
              marginTop: 10,
              elevation: 10,
              shadowColor: "#3862F8",
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowRadius: 10,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 15,
                backgroundColor: "#4361EE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={imageSource} style={{ width: 20, height: 25 }} />
            </View>
          </View>
          <View>
            <AppText theText={title} />
            <AppText theText={subtitle} />
            {subtitle2 && <AppText theText={subtitle2} />}
          </View>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
          color="#4361EE"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileCards;
