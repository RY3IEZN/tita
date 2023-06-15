/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import bankussdcode from "../components/bankussdcode";
import UssdCard from "../components/UssdCard";

const { width, height } = Dimensions.get("screen");

function UssdCode(props) {
  return (
    <>
      <Spacer height={10} />
      <AppText textAlign={"center"} theText={"Input your deposit amount"} />
      <Spacer height={20} />
      <View style={styles.textInputBox}>
        <View style={{ marginHorizontal: 10 }}></View>
        <TextInput
          placeholder="Amount"
          style={{ width: width * 0.75 }}
          keyboardType="number-pad"
        />
      </View>
      <Spacer height={25} />
      <FlatList
        data={bankussdcode}
        renderItem={({ item }) => <UssdCard detail={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default UssdCode;
