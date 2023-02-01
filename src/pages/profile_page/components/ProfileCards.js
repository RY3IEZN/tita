/** @format */

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileCards({ title, subtitle, imageSource, subtitle2 }) {
  return (
    <TouchableOpacity>
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
              height: 70,
              width: 70,
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
                borderRadius: 10,
                backgroundColor: "#4361EE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={imageSource} style={{ width: 25, height: 25 }} />
            </View>
          </View>
          <View>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Text>{subtitle2}</Text>
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
