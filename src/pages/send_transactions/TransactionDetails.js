/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import LineDivider from "../components/LineDivider";
import Spacer from "../components/Spacer";
import TransactionButtons from "./components/TransactionButtons";

const { width, height } = Dimensions.get("screen");

function TransactionDetails(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Transaction Details"} />
      <Spacer height={height * 0.02} />
      {/* the card details */}
      <View style={styles.transactionCardDetails}>
        {/* top section of the card */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../../assets/icons/transactionsuccessful.png")}
            style={{ width: 70, height: 70 }}
          />
          <View>
            <Spacer height={20} />
            <AppText theText={"Transaction Succesful"} fontWeight={"bold"} />
            <AppText theText={new Date().toUTCString()} />
            <AppText />
          </View>
        </View>
        <LineDivider />
        {/* middle section of the card */}
        {/* recievers details */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <AppText theText={"Paid to"} />
            <AppText theText={"Aliyu Victor"} />
            <AppText theText={"9876543210"} />
            <AppText theText={"Description: Food "} />
          </View>
          <TouchableOpacity>
            <AppText theText={"Share Reciept"} color={"blue"} />
          </TouchableOpacity>
        </View>
        {/* senders details */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <AppText theText={"Paid to"} />
            <AppText theText={"Aliyu Victor"} />
            <AppText theText={"9876543210"} />
            <AppText theText={"Description: Food "} />
          </View>
          <Spacer width={100} />
        </View>
        {/* transaction ID */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <AppText theText={"Transaction ID"} />
            <AppText theText={"123456789101"} />
          </View>
          <Spacer width={130} />
        </View>
        <LineDivider />
        <Spacer height={10} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <AppText theText={"Amount"} />
          <AppText theText={"N20,000"} fontSize={25} fontWeight={"bold"} />
        </View>
      </View>

      <Spacer height={30} />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TransactionButtons AppBtnText={"Repeat Transaction"} color={"blue"} />
        <Spacer width={30} />
        <TransactionButtons AppBtnText={"Go To Home"} />
      </View>
      <Spacer height={height * 0.15} />
      <Image
        source={require("../../../assets/icons/poweredbytita.png")}
        style={{ alignSelf: "center" }}
      />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  transactionCardDetails: {
    backgroundColor: "white",
    height: height * 0.45,
    marginHorizontal: 5,
    marginBottom: 50,
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 5,
  },
});

export default TransactionDetails;
