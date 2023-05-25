/** @format */

import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import Spacer from "../components/Spacer";
import PageIndicator2 from "../components/PageIndicator2";
import AppText from "../components/AppText";
import CountryAppPicker from "./components/CountryAppPicker";
import RegionAppPicker from "./components/RegionAppPicker";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import { RadioButton } from "react-native-paper";
import CustomRadioBtns from "./components/CustomRadioBtns";

function KycPage2({ navigation, route }) {
  const values = route.params;

  // formstate to be handled by formik later
  const [nextOfKin, setNextOfKin] = useState("");
  const [nextOfKinRelationship, setNextOfKinRelationship] = useState("");
  const [nextOfKinGender, setNextOfKinGender] = useState("");
  const [nextOfKinAddress, setNextOfKinAddress] = useState("");
  const [nextOfKinPhoneNumber, setNextOfKinPhoneNumber] = useState("");
  const [nextOfKinMaritialStatus, setNextOfKinMaritialStatus] = useState("");

  // radiobtn states
  const [checkedGenderNok, setCheckedGenderNok] = useState("");
  const [checkedMaritialStatusNok, setCheckedMaritialStatusNok] = useState("");

  //onsubmit, add the selected choice to the object and move to the next page
  const handleSubmit = () => {
    const newValues = {
      ...values,
      nextOfKin: nextOfKin,
      nextOfKinRelationship: nextOfKinRelationship,
      nextOfKinGender: nextOfKinGender,
      nextOfKinAddress: nextOfKinAddress,
      nextOfKinPhoneNumber: nextOfKinPhoneNumber,
      nextOfKinMaritialStatus: nextOfKinMaritialStatus,
    };
    // Navigate to the next page with the updated data
    navigation.navigate("kycpage3", { newValues });
  };

  return (
    <ScrollView showsVerticalScrollIndicator>
      <View style={styles.container}>
        <Spacer height={40} />
        <Header headerTitle={"KYC Form"} canGoBack />
        <Spacer height={10} />
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <PageIndicator2 pageIndex={2} />
        </View>
        <Spacer height={20} />
        <View style={styles.banner}>
          <AppText theText={"B. Next Of Kin"} color={"white"} fontSize={24} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Spacer height={20} />
          <AppText theText={"Next of Kin"} />
          <Spacer height={10} />
          <View style={styles.textInputBox}>
            <TextInput
              placeholder="Next of Kin"
              onChangeText={(text) => setNextOfKin(text)}
            />
          </View>
          <Spacer height={20} />
          {/* nextOfKinGendet and maritial status */}
          <View style={{ height: 100, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <AppText theText={"Gender"} />
                {/* male radiobtn */}
                <CustomRadioBtns
                  radioBtnText={"Male"}
                  value={"first"}
                  status={
                    checkedGenderNok === "first" ? "checked" : "unchecked"
                  }
                  onPress={() => {
                    setCheckedGenderNok("first");
                    setNextOfKinGender("Male");
                    console.log("male selected");
                  }}
                />
                {/* female radiobtn */}
                <CustomRadioBtns
                  radioBtnText={"Female"}
                  value={"first"}
                  status={
                    checkedGenderNok === "second" ? "checked" : "unchecked"
                  }
                  onPress={() => {
                    setCheckedGenderNok("second");
                    setNextOfKinGender("Female");
                    console.log("female selected");
                  }}
                />
              </View>
              {/* ss */}
              <Spacer width={50} />
              <View>
                <AppText theText={"Marital Status"} />
                {/* male radiobtn */}
                <CustomRadioBtns
                  radioBtnText={"Married"}
                  value={"Third"}
                  status={
                    checkedMaritialStatusNok === "Third"
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => {
                    setCheckedMaritialStatusNok("Third");
                    setNextOfKinMaritialStatus("Married");
                    console.log("Married selected");
                  }}
                />
                {/* single radiobtn */}
                <CustomRadioBtns
                  radioBtnText={"Single"}
                  value={"fourth"}
                  status={
                    checkedMaritialStatusNok === "fourth"
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => {
                    setCheckedMaritialStatusNok("fourth");
                    setNextOfKinMaritialStatus("single");
                    console.log("single selected");
                  }}
                />
              </View>
            </View>
          </View>
          <Spacer height={15} />
          {/* relationship */}
          <AppText theText={"Relationship"} />
          <Spacer height={10} />
          <View style={styles.textInputBox}>
            <TextInput
              placeholder="Relationship"
              onChangeText={(text) => setNextOfKinRelationship(text)}
            />
          </View>
          <Spacer height={20} />
          <AppText theText={"Address"} />
          <View style={styles.textInputBox}>
            <TextInput
              placeholder="Address"
              onChangeText={(text) => setNextOfKinAddress(text)}
            />
          </View>
          <Spacer height={10} />
          <AppText theText={"Phone Number"} />
          <View style={styles.textInputBox}>
            <TextInput
              placeholder="Phone Number"
              onChangeText={(text) => setNextOfKinPhoneNumber(text)}
            />
          </View>
          <Spacer height={30} />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <AppButton AppBtnText={"Next"} onPress={() => handleSubmit()} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    width: 500,
    height: 65,
    backgroundColor: "#305af9",
    overflow: "visible",
    justifyContent: "center",
    paddingHorizontal: 30,
    elevation: 20,
    shadowColor: "#4361EE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  textInputBox: {
    width: 370,
    backgroundColor: "#f4f4f4",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default KycPage2;
