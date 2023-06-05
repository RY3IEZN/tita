/** @format */

import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Alert } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppSoftButton from "../components/AppSoftButton";
import Header from "../components/Header";
import ProfileBtn1 from "./components/ProfileBtn1";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileCards from "./components/ProfileCards";
import Spacer from "../components/Spacer";
import axios from "axios";
import AuthApi from "../../api/auth/AuthApi";
import ProfileApi from "../../api/user/ProfileApi";
import UseApi from "../../api/UseApi";
import apiClient, { updateApiSauceSettings } from "../../api/ApiClient";
import AppText from "../components/AppText";
import * as SecureStore from "expo-secure-store";

function ProfilePage({ navigation }) {
  const [profileDetails, setProfileDetails] = useState([]);

  const getUserApi = UseApi(ProfileApi.get_profile);

  useEffect(() => {
    getUserApi.makeRequest();
  }, []);

  useEffect(() => {
    if (getUserApi.data && getUserApi.statusCode) {
      setProfileDetails(getUserApi.data);
    }
  }, [getUserApi.data, profileDetails]);

  // calling a function inside a function, helper function
  const LogOutApi = UseApi(ProfileApi.logout);

  // function to logout the user
  const onLogOut = async () => {
    LogOutApi.makeRequest();
    await updateApiSauceSettings("");
    await SecureStore.deleteItemAsync("tokenId");
    navigation.replace("loginpage");
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Account"} />

      <View style={styles.logoutSection}>
        <AppSoftButton
          onPress={() => console.log("ddddd")}
          source={require("../../../assets/icons/Moon.png")}
        />
        <AppSoftButton
          onPress={() => onLogOut()}
          // onPress={() => navigation.replace("loginpage")}
          source={require("../../../assets/icons/Logout.png")}
        />
      </View>

      <View style={styles.profilePicSection}>
        <View style={styles.profilePic}></View>
        <Image
          source={require("../../../assets/icons/editbtn.png")}
          style={{ height: 15, width: 15, marginTop: 80 }}
        />
      </View>

      <View style={styles.profileInfo}>
        <View style={{ flexDirection: "row" }}>
          <AppText theText={profileDetails.first_name} />
          <Spacer width={10} />
          <AppText theText={profileDetails.last_name} />
        </View>

        <AppText theText={profileDetails.phone_number} />
        <AppText theText={profileDetails.email} />
      </View>

      <View style={styles.profileBtnAction}>
        <ProfileBtn1
          onPress={() => navigation.navigate("updatekyc")}
          title1={"Update"}
          title2={"KYC"}
          imageSource={require("../../../assets/icons/updateaccountinfor.png")}
        />
        <ProfileBtn1
          onPress={() => navigation.navigate("changepin")}
          title1={"Change"}
          title2={"Pin"}
          imageSource={require("../../../assets/icons/changepin.png")}
        />
        <ProfileBtn1
          onPress={() => navigation.navigate("qrpage")}
          title1={"My"}
          title2={"QR Code"}
          imageSource={require("../../../assets/icons/finger-scan.png")}
        />
        <ProfileBtn1
          onPress={() => navigation.navigate("helppage")}
          title1={"Help"}
          title2={"& Support"}
          imageSource={require("../../../assets/icons/help.png")}
        />
      </View>

      <ProfileCards
        title={"Accounts"}
        subtitle={"Manage your accounts"}
        imageSource={require("../../../assets/icons/Wallet.png")}
      />
      <ProfileCards
        title={"Language"}
        subtitle={"You can change the app language"}
        imageSource={require("../../../assets/icons/Ticket.png")}
      />
      <ProfileCards
        title={"Security"}
        subtitle={"Manage Touch ID or face ID"}
        imageSource={require("../../../assets/icons/openlock.png")}
      />
      <ProfileCards
        title={"Privacy Policy"}
        subtitle={"Read our terms of service"}
        imageSource={require("../../../assets/icons/privacypolicy.png")}
      />
      <Spacer height={30} />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  logoutSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  profilePic: {
    borderWidth: 1,
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  profileBtnAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginHorizontal: 20,
  },
});

export default ProfilePage;
