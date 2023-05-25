/** @format */

import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
import RegionAppPicker from "./components/RegionAppPicker";
import CountryAppPicker from "./components/CountryAppPicker";
import { useState } from "react";
import CustomRadioBtns from "./components/CustomRadioBtns";
import Header from "../components/Header";
import DatePicker from "react-native-modern-datepicker";
import NationalityAppPicker from "./components/NationalityAppPicker";
import Uploadaimg from "../../../assets/svg/Uploadaimg";
import { StatusBar } from "expo-status-bar";
import PageIndicator2 from "../components/PageIndicator2";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function KycPage4({ navigation, route }) {

// ============deleteme later=============
if you are getting an error, it because of this lines
 about 80% done, what is left is to

 i wrote this on purpose 25th may 2023 

get the values all from page1,2,3 and let then load into 4.
set their values to the values that loaded which will make this page
editable
// ============deleteme later=============




  //   =====================page1============================================
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
    console.log(date);
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
  //   =====================page1============================================

  //   =====================page2============================================
  //   =====================page2============================================
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
  //   =====================page2============================================
  //   =====================page2============================================

  //   =====================page3============================================
  //   =====================page3============================================
  const [residentialAddress, setResidentialAddress] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Please select");
  const [continent, setContinent] = useState("Please select");
  const [selectedCountry, setSelectedCountry] = useState("Please select");
  const [country, setCountry] = useState("Please select");

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    setContinent(continent);
  };
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setCountry(country);
  };
  //   =====================page3============================================
  //   =====================page3============================================

  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView style={{ justifyContent: "center" }}>
        <StatusBar />
        <Spacer height={30} />
        {/* page1 =================================================================>*/}
        <Header headerTitle={"KYC Form"} canGoBack />
        <Spacer height={5} />
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <PageIndicator2 pageIndex={4} />
        </View>
        <Spacer height={15} />
        {/* bannner */}
        <View style={styles.banner}>
          <AppText
            theText={"D. Details Review"}
            color={"white"}
            fontSize={24}
          />
        </View>
        {/* bannner */}
        <View style={[styles.banner2]}>
          <AppText
            theText={"A. Identity Details"}
            color={"#3862F8"}
            fontSize={24}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Spacer height={10} />
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
              <AppText theText={selectedDate ? selectedDate : "dd-mm-yyyy"} />
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
        </View>
        {/* page2 =================================================================>*/}
        <View style={{ justifyContent: "center", alignSelf: "center" }}></View>
        <Spacer height={20} />
        <View style={styles.banner2}>
          <AppText theText={"B. Next Of Kin"} color={"#3862F8"} fontSize={24} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <AppText theText={"Next of Kin"} />
          <Spacer height={10} />
          <View style={styles.textInput}>
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
          <View style={styles.textInput}>
            <TextInput
              placeholder="Relationship"
              onChangeText={(text) => setNextOfKinRelationship(text)}
            />
          </View>
          <Spacer height={20} />
          <AppText theText={"Address"} />
          <View style={styles.textInput}>
            <TextInput
              placeholder="Address"
              onChangeText={(text) => setNextOfKinAddress(text)}
            />
          </View>
          <Spacer height={10} />
          <AppText theText={"Phone Number"} />
          <View style={styles.textInput}>
            <TextInput
              placeholder="Phone Number"
              onChangeText={(text) => setNextOfKinPhoneNumber(text)}
            />
          </View>
        </View>

        {/* page3 =================================================================>*/}
        <View style={styles.container}>
          <Spacer height={20} />
          <View style={styles.banner2}>
            <AppText
              theText={"C. Address Details"}
              color={"#3862F8"}
              fontSize={24}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <AppText theText={"Country"} />
            <Spacer height={10} />
            <CountryAppPicker
              selectedValue={selectedCountry}
              onValueChange={handleCountryChange}
            />
            <Spacer height={20} />
            <AppText theText={"City/Region"} />
            <Spacer height={10} />
            <RegionAppPicker
              selectedValue={selectedContinent}
              onValueChange={handleContinentChange}
            />
            <Spacer height={20} />
            <View style={{ justifyContent: "center" }}>
              <AppText theText={"Residential Address"} />
              <View style={styles.textInput}>
                <TextInput
                  placeholder="Residential Address"
                  onChangeText={(text) => setResidentialAddress(text)}
                />
              </View>
            </View>
            <Spacer height={30} />
          </View>
        </View>
        {/* page4 =================================================================>*/}
        <View style={{ justifyContent: "flex-start" }}>
          <View style={styles.banner2}>
            <AppText
              theText={"D. Declaration"}
              color={"#3862F8"}
              fontSize={24}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MaterialCommunityIcons
              name="checkbox-blank-outline"
              size={24}
              color="black"
            />
            <Spacer width={5} />
            <AppText
              textAlign={"left"}
              fontSize={15}
              theText={
                "I do hereby declare that the information provided above with respect to my account is up to and correct."
              }
            />
          </View>
          {/* dob textinput */}
          <View style={{ justifyContent: "center", marginHorizontal: 20 }}>
            <AppText
              theText={"Date of Birth"}
              fontWeight={"600"}
              fontSize={18}
            />
            <Spacer height={10} />
            <View style={styles.textInput}>
              <TouchableOpacity onPress={() => setShowCalendar(true)}>
                <AppText theText={selectedDate ? selectedDate : "dd-mm-yyyy"} />
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
          </View>
          <View style={{ alignItems: "center" }}>
            <Spacer height={15} />
            <AppButton AppBtnText={"Procced"} />
            <Spacer height={15} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  banner2: {
    width: 500,
    height: 65,
    overflow: "visible",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  textInput: {
    width: 370,
    backgroundColor: "#f4f4f4",
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default KycPage4;
