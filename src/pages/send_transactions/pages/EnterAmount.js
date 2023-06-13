/** @format */

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AppContainerView from "../../components/AppContainerView";
import AppPicker from "../../components/AppPicker";
import AppSoftButton from "../../components/AppSoftButton";
import AppText from "../../components/AppText";
import Header from "../../components/Header";
import LineDivider from "../../components/LineDivider";
import Spacer from "../../components/Spacer";
import ProfileBtn1 from "../../profile_page/components/ProfileBtn1";
import SelectAccountType from "../../components/SelectAccountType";
import SelectAccountTypeModal from "../../../components/modal/SelectAccountTypeModal";

const { width, height } = Dimensions.get("screen");

function EnterAmount({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [theAccountType, setTheAccountType] = useState("savings");
  const handModalItemPress = (data) => {
    // Perform actions on the red page based on the data received from the modal
    setTheAccountType(data);
    setModalVisible(!modalVisible);
    console.log("Modal action performed with data:", data);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Spacer height={40} />
            <Header headerTitle={"Enter Amount"} />
            <Spacer height={40} />
            <View>
              <View style={styles.amountCard}>
                {/* name */}
                <Spacer height={15} />
                <AppSoftButton />
                <Spacer height={5} />
                <AppText theText={"Aliyu Victor"} />
                <AppText theText={"080123456789"} />
                <Spacer height={25} />
                <LineDivider height={0.5} />
                {/* amount */}
                <Spacer height={20} />
                <TextInput
                  placeholder="Amount"
                  style={{
                    fontSize: 30,
                    fontWeight: "600",
                    width: 300,
                    textAlign: "center",
                  }}
                />
                <Spacer height={20} />
                {/* description */}
                <LineDivider height={0.5} />
                <TextInput
                  placeholder="Add a note (optional)"
                  style={{
                    fontWeight: "600",
                    width: 300,
                    textAlign: "center",
                  }}
                />
              </View>
            </View>
            <Spacer height={height * 0.31} />
            {/* select account type */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  height: height * 0.2,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  paddingHorizontal: 20,
                  justifyContent: "center",
                  elevation: 5,
                }}
              >
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
                <Spacer height={30} />
                <AppButton
                  AppBtnText={"Next"}
                  onPress={() => navigation.navigate("enterPin")}
                />
              </View>
            </View>
          </View>
          <SelectAccountTypeModal
            isModalVisible={modalVisible}
            onModalClose={() => setModalVisible(false)}
            handModalItemPress={(data) => handModalItemPress(data)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  amountCard: {
    height: height * 0.3,
    width: width * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    elevation: 10,
  },
});

export default EnterAmount;
