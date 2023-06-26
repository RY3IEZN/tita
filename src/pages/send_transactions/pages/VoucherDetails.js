/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../../components/AppContainerView";
import Header from "../../components/Header";
import AppText from "../../components/AppText";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import TransactionButtons from "../components/TransactionButtons";
import Spacer from "../../components/Spacer";

const { width, height } = Dimensions.get("screen");

function VoucherDetails({ navigation, route }) {
  let voucherDetailsInfo = route.params;

  console.log(voucherDetailsInfo);

  return (
    <AppContainerView>
      <Header headerTitle={"Voucher Details"} />
      <Spacer height={10} />
      <AppText
        theText={"Congratulations! Your voucher has been successfully created."}
      />
      <Spacer height={10} />
      <AppText theText={"Here's the details: "} fontWeight={"800"} />
      <Spacer height={15} />
      {/* the details */}
      <View style={styles.details}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Voucher Code:"}
            color={"#3b5dfe"}
            fontWeight={"800"}
          />
          <AppText theText={voucherDetailsInfo.voucherDetails.code} />
        </View>
        <Spacer height={10} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText theText={"Amount:"} color={"#3b5dfe"} fontWeight={"800"} />
          <AppText theText={`N${voucherDetailsInfo.voucherDetails.amount}`} />
        </View>
        <Spacer height={10} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AppText
            theText={"Valid Until:"}
            color={"#3b5dfe"}
            fontWeight={"800"}
          />
          <AppText theText={"18/06/2023"} fontWeight={"600"} />
        </View>
      </View>
      <Spacer height={15} />
      <AppText
        theText={"Scan barcode to Credit Account"}
        fontWeight={"700"}
        color={"#bdbdbd"}
        textAlign={"center"}
      />
      <Spacer height={15} />
      {/* barcode */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../../../assets/icons/tempbarcode.png")} />
      </View>
      <Spacer height={20} />
      <View style={styles.redeemDetails}>
        <AppText
          theText={"To redeem your voucher, simply follow these steps:"}
          textDecorationLine={"underline"}
          fontSize={13}
          fontWeight={"bold"}
        />
        <Spacer height={10} />
        <AppText
          fontSize={12}
          theText={
            "\u2022 Present this voucher code to the merchant or enter it during the checkout process on our partner website."
          }
          textAlign={"left"}
          lineHeight={21}
          fontWeight={"600"}
        />
        <AppText
          fontSize={12}
          theText={
            "\u2022 Ensure that the voucher code is entered accurately to avoid any issues with redemption."
          }
          textAlign={"left"}
          lineHeight={21}
        />
        <AppText
          fontSize={12}
          theText={
            "\u2022 Please note that this voucher is valid until 18/06/2023. Make sure to redeem it before the expiration date to enjoy the benefits."
          }
          textAlign={"left"}
          lineHeight={21}
        />
        <AppText
          fontSize={12}
          theText={
            "\u2022 If you have any questions or need assistance with voucher redemption, please contact our customer support team at +234 706 888 5195 or email us at help@titafinance.com"
          }
          textAlign={"left"}
          lineHeight={21}
        />
      </View>
      <Spacer height={15} />
      {/* thank the customer for chosing tita */}
      <AppText
        theText={
          "Thank you for choosing TITA for your voucher creation needs. Enjoy using your voucher and have a fantastic experience!"
        }
        fontWeight={"800"}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <TransactionButtons color={"blue"} AppBtnText={"Repeat Transaction"} />
        <TransactionButtons AppBtnText={"Go to Home"} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.btn}>
          <AppText
            theText={"Share"}
            color={"#4361ee"}
            fontSize={15}
            fontWeight={"500"}
          />
        </TouchableOpacity>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  details: {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  redeemDetails: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    borderStyle: "dashed",
    borderColor: "#bdbdbd",
    borderWidth: 3,
  },
  btn: {
    height: 55,
    width: width * 0.85,
    backgroundColor: "#e1e8fe",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default VoucherDetails;
