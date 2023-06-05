/** @format */

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomCreditCard from "../components/CustomCreditCard";
import AppText from "../../components/AppText";

function SavedCards(props) {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 300,
        }}
      >
        <AppText
          theText={"Coming soon"}
          fontSize={40}
          fontWeight={"bold"}
          color={"blue"}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SavedCards;
