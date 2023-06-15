/** @format */

import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Spacer from "../components/Spacer";
import AppSoftCards from "../components/AppSoftCards";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddMoneyPageCards from "./components/AddMoneyPageCards";
import Header from "../components/Header";

const { width, height } = Dimensions.get("screen");

function AddMoneyPage(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Add Money"} />
      <View style={styles.bankTransferCard}>
        <View style={styles.bankTransferCardUpperSection}>
          <View style={styles.bankTransferCardUpperInnerSection}>
            <View style={styles.bankTransferCardIconsAndTitle}>
              <Image source={require("../../../assets/icons/bank_icon.png")} />
              <Spacer width={15} />
              <View>
                <AppText
                  theText={"Bank Transfer"}
                  fontSize={15}
                  fontWeight={"600"}
                />
                <AppText
                  theText={"Add money via mobile or internet banking"}
                  fontSize={11}
                  fontWeight={"500"}
                />
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              color={"blue"}
              size={25}
            />
          </View>
        </View>
        {/* lower section of 1stcard */}
        <AppText theText={"---------------------------------------"} />
        <View style={styles.bankTransferCardLowerSection}>
          <View style={styles.bankTransferCardLowerInnerSection}>
            <View style={styles.bankTransferCardIconsAndTitle}>
              <Spacer width={10} />
              <View>
                <AppText
                  theText={"Tita Account Number"}
                  fontSize={11}
                  fontWeight={"600"}
                />
                <AppText
                  theText={"02497461671"}
                  fontSize={24}
                  fontWeight={"bold"}
                  lineHeight={25}
                />
              </View>
              <Spacer width={80} />
              <View
                style={{
                  backgroundColor: "#d3dafd",
                  width: 70,
                  height: 30,
                  justifyContent: "center",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AppText theText={"Copy"} color={"white"} />
                <Image
                  source={require("../../../assets/icons/copybtn-removebg-preview.png")}
                  style={{ height: 20, width: 20 }}
                />
              </View>
            </View>
          </View>
        </View>
        {/*  */}
      </View>

      <AddMoneyPageCards
        title={"USSD Transfer"}
        subTitle={"Fund your account with other banks’ USSD code"}
        imgUrl={require("../../../assets/icons/ussd_code.png")}
      />
      <AddMoneyPageCards
        title={"Add money with your Card or Account"}
        subTitle={"Fund your account with Your card or bank account"}
        imgUrl={require("../../../assets/icons/atm_card.png")}
      />
      <AddMoneyPageCards
        title={"Voucher Card"}
        subTitle={"Fund your account with Tita voucher card"}
        imgUrl={require("../../../assets/icons/vouchercard.png")}
      />
      <AddMoneyPageCards
        title={"Request from Friends"}
        subTitle={"Send request to any Tita user"}
        imgUrl={require("../../../assets/icons/request_from_friend.png")}
      />
      <AddMoneyPageCards
        title={"Cash Deposit"}
        subTitle={"Fund your account with Tita Merchants"}
        imgUrl={require("../../../assets/icons/cash_deposit.png")}
      />
      <AddMoneyPageCards
        title={"Scan my Barcode"}
        subTitle={"Show Barcode to any Tita user"}
        imgUrl={require("../../../assets/icons/scan_my_barcode.png")}
      />
      <Spacer height={50} />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  bankTransferCard: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    margin: 10,
    // flexDirection: "row",
    padding: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
  },
  bankTransferCardIconsAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bankTransferCardUpperSection: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  bankTransferCardUpperInnerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bankTransferCardLowerSection: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  bankTransferCardLowerInnerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});

export default AddMoneyPage;
