/** @format */

import React from "react";
import { useState } from "react";
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppSoftButton from "../../components/AppSoftButton";
import AppText from "../../components/AppText";
import LineDivider from "../../components/LineDivider";
import Otp from "../../components/Otp";
import Spacer from "../../components/Spacer";
import EmptyModal from "../../../components/modal/EmptyModal";
import Header from "../../components/Header";
import SelectAccountType from "../../components/SelectAccountType";
import SelectAccountTypeModal from "../../../components/modal/SelectAccountTypeModal";

const { width, height } = Dimensions.get("screen");

function EnterPin({ navigation }) {
  const [isVerified, setIsVerified] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [theAccountType, setTheAccountType] = useState("savings");

  const handModalItemPress = (data) => {
    // Perform actions on the red page based on the data received from the modal
    setTheAccountType(data);
    setModalVisible(!modalVisible);
    console.log("Modal action performed with data:", data);
  };
  return (
    <AppContainerView>
      <Header
        headerTitle={"Enter Pin"}
        canGoBack
        onPress={() => navigation.goBack()}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Spacer height={15} />
        <View style={{ alignItems: "center" }}>
          <View style={styles.amountCard}>
            <Spacer height={10} />
            {/* paying to */}
            <View style={{ flexDirection: "row" }}>
              <Spacer width={15} />
              <AppText theText={"Paying to"} />
            </View>
            {/* reciver details from previous page */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <AppSoftButton />
                <View>
                  <AppText theText={"Aliyu victor"} />
                  <AppText theText={"0987654321"} />
                </View>
              </View>
              <AppText theText={"20,000,000,000,000"} fontSize={15} />
            </View>
            {/* Debit From */}
            <Spacer height={15} />
            <View style={{ flexDirection: "row" }}>
              <Spacer width={15} />
              <AppText theText={"Debit From"} />
            </View>
            {/* the acconunt to debit from as choosen from the previous page and can be changed at this point */}
            {theAccountType === "savings" && (
              <SelectAccountType
                imgSrc={require("../../../../assets/icons/savingsaccoubticon.png")}
                accountType={"Savings Account"}
                accountnumber={"Change"}
                textColour={"blue"}
                onPress={() => setModalVisible(!modalVisible)}
              />
            )}

            {theAccountType === "titawallet" && (
              <SelectAccountType
                imgSrc={require("../../../../assets/icons/titawalleticon.png")}
                accountType={"Tita Wallet"}
                accountnumber={"Change"}
                textColour={"blue"}
                onPress={() => setModalVisible(!modalVisible)}
              />
            )}

            {theAccountType === "business" && (
              <SelectAccountType
                imgSrc={require("../../../../assets/icons/businessaccounticon.png")}
                accountType={"Business Wallet"}
                accountnumber={"Change"}
                textColour={"blue"}
                onPress={() => setModalVisible(!modalVisible)}
              />
            )}
            <Spacer height={20} />
            <LineDivider />
            {/* descritpion */}
            {/* <Spacer height={5} /> */}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <AppText theText={"food bill"} />
            </View>
          </View>
        </View>
        <Spacer height={50} />
        {/* render the opt pin only if isVerifed is true */}
        {isVerified === true ? (
          <View>
            <Otp />
            <TouchableOpacity>
              <AppText
                theText={"Forget Pin?"}
                textAlign={"center"}
                color={"grey"}
              />
            </TouchableOpacity>
            <Spacer height={15} />
          </View>
        ) : (
          ""
        )}
        <AppButton
          AppBtnText={isVerified === true ? "Send" : "Procced"}
          onPress={
            isVerified === true
              ? () => {
                  console.log("moneysent");
                  navigation.navigate("transactionSuccessful");
                }
              : () => setIsVerified(true)
          }
        />
        {/* <AppButton
          AppBtnText={"emptymodal"}
          onPress={() => setModalVisible(!modalVisible)}
        /> */}
      </View>
      {/* <EmptyModal
        isModalVisible={modalVisible}
        onModalClose={() => setModalVisible(false)}
      /> */}
      <SelectAccountTypeModal
        isModalVisible={modalVisible}
        onModalClose={() => setModalVisible(false)}
        handModalItemPress={(data) => handModalItemPress(data)}
      />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  amountCard: {
    height: height * 0.29,
    width: width * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
  },
});

export default EnterPin;
