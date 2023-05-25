/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  Text,
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
import DatePicker from "react-native-modern-datepicker";

function KycPage1({ navigation }) {
  // states
  // radiobtn states
  const [checkedGender, setCheckedGender] = useState("");
  const [checkedMaritialStatus, setCheckedMaritialStatus] = useState("");
  const [checkedResidentialStatus, setCheckedResidentialStatus] = useState("");
  const [checkedMeansOfId, setCheckedMeansOfId] = useState("");

  // calendar and modal state
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // formstate to be handled by formik later
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritialStatus, setMaritialStatus] = useState("");
  const [residentialStatus, setResidentialStatus] = useState("");
  const [meansOfIdentification, setMeansOfIdentification] = useState("");

  // nationality app picker state
  const [selectedNationality, setSelectedNationality] =
    useState("Please select");

  // image state
  const [image, setImage] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  // handle date function
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDob(date);
    setShowCalendar(false);
  };

  // pick image function
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

  // nationality picker
  const handleNationalityChange = (nationality) => {
    setSelectedNationality(nationality);
    console.log(nationality);
    setNationality(nationality);
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
      {/* bannner */}
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
          <TextInput
            placeholder="Full Name"
            onChangeText={(text) => setFullName(text)}
          />
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
              <CustomRadioBtns
                radioBtnText={"Male"}
                value={"first"}
                status={checkedGender === "first" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedGender("first");
                  setGender("Male");
                  console.log("male selected");
                }}
              />
              {/* female radiobtn */}
              <CustomRadioBtns
                radioBtnText={"Female"}
                value={"first"}
                status={checkedGender === "second" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedGender("second");
                  setGender("Female");
                  console.log("female selected");
                }}
              />
            </View>
            {/* relation status*/}
            <Spacer width={50} />
            <View>
              <AppText
                theText={"Marital Status"}
                fontWeight={"600"}
                fontSize={18}
              />
              {/* married radiobtn */}
              <CustomRadioBtns
                radioBtnText={"Married"}
                value={"Third"}
                status={
                  checkedMaritialStatus === "Third" ? "checked" : "unchecked"
                }
                onPress={() => {
                  setCheckedMaritialStatus("Third");
                  setMaritialStatus("Married");
                  console.log("Married selected");
                }}
              />
              {/* single radiobtn */}
              <CustomRadioBtns
                radioBtnText={"Single"}
                value={"fourth"}
                status={
                  checkedMaritialStatus === "fourth" ? "checked" : "unchecked"
                }
                onPress={() => {
                  setCheckedMaritialStatus("fourth");
                  setMaritialStatus("single");
                  console.log("single selected");
                }}
              />
            </View>
          </View>
        </View>
        <Spacer height={15} />
        {/* dob textinput */}
        <AppText theText={"Date of Birth"} fontWeight={"600"} fontSize={18} />
        <Spacer height={10} />
        <View style={styles.textInput}>
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <Text>{selectedDate ? selectedDate : "dd-mm-yyyy"}</Text>
          </TouchableOpacity>
          <Modal
            visible={showCalendar}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setShowCalendar(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <DatePicker
                  style={{ width: 400 }}
                  date={selectedDate}
                  mode="calendar"
                  placeholder="Select date"
                  format="DD-MM-YYYY"
                  minDate="01-01-1900"
                  maxDate="31-12-2100"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={handleDateChange}
                />
                <TouchableOpacity onPress={() => setShowCalendar(false)}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <Spacer height={20} />
        {/* nationallity */}
        <AppText theText={"Nationality"} fontWeight={"600"} fontSize={18} />
        <NationalityAppPicker
          onValueChange={handleNationalityChange}
          selectedValue={selectedNationality}
        />
        <Spacer height={10} />
        {/* residential status */}
        <AppText theText={"Status"} fontWeight={"600"} fontSize={18} />
        <CustomRadioBtns
          radioBtnText={"Residential"}
          value={"fifth"}
          status={
            checkedResidentialStatus === "fifth" ? "checked" : "unchecked"
          }
          onPress={() => {
            setCheckedResidentialStatus("fifth");
            setResidentialStatus("Residential");
            console.log("Residential");
          }}
        />
        <CustomRadioBtns
          radioBtnText={"Non-Residential"}
          value={"sixth"}
          status={
            checkedResidentialStatus === "sixth" ? "checked" : "unchecked"
          }
          onPress={() => {
            setCheckedResidentialStatus("sixth");
            setResidentialStatus("Non-Residential");
            console.log("Non-Residential");
          }}
        />
        <CustomRadioBtns
          radioBtnText={"Foriegn National"}
          value={"sixth"}
          status={
            checkedResidentialStatus === "Seventh" ? "checked" : "unchecked"
          }
          onPress={() => {
            setCheckedResidentialStatus("Seventh");
            setResidentialStatus("Foriegn National");
            console.log("Foriegn National");
          }}
        />
        {/* means of id */}
        <AppText
          theText={"Means of Identification"}
          fontWeight={"600"}
          fontSize={18}
        />
        <CustomRadioBtns
          radioBtnText={"Passport"}
          value={"eigth"}
          status={checkedMeansOfId === "eigth" ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedMeansOfId("eigth");
            setMeansOfIdentification("passport");
            console.log("passport");
          }}
        />
        <CustomRadioBtns
          radioBtnText={"NIN"}
          value={"nineth"}
          status={checkedMeansOfId === "nineth" ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedMeansOfId("nineth");
            setMeansOfIdentification("NIN");
            console.log("NIN");
          }}
        />
        <CustomRadioBtns
          radioBtnText={"Voters Card"}
          value={"tenth"}
          status={checkedMeansOfId === "tenth" ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedMeansOfId("tenth");
            setMeansOfIdentification("Voters Card");
            console.log("Voters CARD");
          }}
        />
        <CustomRadioBtns
          radioBtnText={"Drivers License"}
          value={"eleventh"}
          status={checkedMeansOfId === "eleventh" ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedMeansOfId("eleventh");
            setMeansOfIdentification("Drivers licese");
            console.log("Drivers licese");
          }}
        />
        <CustomRadioBtns
          radioBtnText={"International Passport"}
          value={"tweleth"}
          status={checkedMeansOfId === "tweleth" ? "checked" : "unchecked"}
          onPress={() => {
            setCheckedMeansOfId("tweleth");
            setMeansOfIdentification("International Passport");
            console.log("International Passport");
          }}
        />
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
        {/* next */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AppButton
            AppBtnText={"Next"}
            onPress={() => {
              console.log(
                fullName,
                gender,
                dob,
                nationality,
                maritialStatus,
                residentialStatus,
                meansOfIdentification
              );
              navigation.navigate("kycpage2", {
                fullName: fullName,
                gender: gender,
                dob: dob,
                nationality: nationality,
                maritialStatus: maritialStatus,
                residentialStatus: residentialStatus,
                meansOfIdentification: meansOfIdentification,
              });
            }}
          />
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default KycPage1;
