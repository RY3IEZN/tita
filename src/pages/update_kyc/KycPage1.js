/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
import AppText from "../components/AppText";
import Header from "../components/Header";
import PageIndicator2 from "../components/PageIndicator2";
import NationalityAppPicker from "./components/NationalityAppPicker";
import { StatusBar } from "expo-status-bar";
import CustomRadioBtns from "./components/CustomRadioBtns";
import Uploadaimg from "../../../assets/svg/Uploadaimg";
import * as ImagePicker from "expo-image-picker";

function KycPage1(props) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator>
      <StatusBar />
      <Spacer height={40} />
      <Header headerTitle={"KYC Form"} canGoBack />
      <Spacer height={10} />
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <PageIndicator2 pageIndex={1} />
      </View>
      <Spacer height={20} />
      <View style={styles.bannerSection}>
        <AppText
          theText={"A. Identity Details"}
          color={"white"}
          fontSize={24}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Spacer height={20} />
        <AppText theText={"Full Name"} fontWeight={"600"} fontSize={18} />
        <View style={styles.textInput}>
          <TextInput placeholder="Full Name" />
        </View>
        <Spacer height={20} />
        {/* gender and maritial status */}
        <View
          style={{
            height: 100,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <AppText theText={"Gender"} fontWeight={"600"} fontSize={18} />
              {/* male radiobtn */}
              <CustomRadioBtns radioBtnText={"Male"} />
              {/* female radiobtn */}
              <CustomRadioBtns radioBtnText={"Female"} />
            </View>
            {/* ss */}
            <Spacer width={50} />
            <View>
              <AppText
                theText={"Marital Status"}
                fontWeight={"600"}
                fontSize={18}
              />
              {/* married radiobtn */}
              <CustomRadioBtns radioBtnText={"Married"} />
              {/* single radiobtn */}
              <CustomRadioBtns radioBtnText={"Single"} />
            </View>
          </View>
        </View>
        <Spacer height={15} />
        {/* relatdobionship */}
        <AppText theText={"Date of Birth"} fontWeight={"600"} fontSize={18} />
        <Spacer height={10} />
        {/* dob textinput */}
        <View style={styles.textInput}>
          <TextInput placeholder="dd-mm-yyyy" />
        </View>
        <Spacer height={20} />
        {/* nationallity */}
        <AppText theText={"Nationality"} fontWeight={"600"} fontSize={18} />
        <NationalityAppPicker />
        <Spacer height={10} />
        {/* statuss */}
        <AppText theText={"Status"} fontWeight={"600"} fontSize={18} />
        <CustomRadioBtns radioBtnText={"Residential"} />
        <CustomRadioBtns radioBtnText={"Non-Residential"} />
        <CustomRadioBtns radioBtnText={"Foriegn National"} />
        <AppText
          theText={"Means of Identification"}
          fontWeight={"600"}
          fontSize={18}
        />
        <CustomRadioBtns radioBtnText={"Passport"} />
        <CustomRadioBtns radioBtnText={"NIN"} />
        <CustomRadioBtns radioBtnText={"Voters Card"} />
        <CustomRadioBtns radioBtnText={"Drivers License"} />
        <CustomRadioBtns radioBtnText={"International Passport"} />
        <Spacer height={10} />
        {/* upload an image and display it here */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "50%",
          }}
          onPress={pickImage}
        >
          <Uploadaimg />
          <AppText
            theText={"Upload Image"}
            textDecorationLine={"underline"}
            color={"#7d92f3"}
          />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Spacer height={30} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AppButton AppBtnText={"Next"} />
        </View>
        <Spacer height={20} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  bannerSection: {
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
  textInput: {
    width: 370,
    backgroundColor: "#e3e4e6",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default KycPage1;
