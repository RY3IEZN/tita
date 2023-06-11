/** @format */

import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  // BackHandler,
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  Button,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Spacer from "../components/Spacer";
import HomeSoftButtons from "./components/HomeSoftButtons";
import QuickActionButton from "./components/QuickActionButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UtilityButtons from "./components/UtilityButtons";
import AddMoneyBtn from "./components/AddMoneyBtn";
import HomePageHeaderSection from "./components/HomePageHeaderSection";
import AppButton from "../components/AppButton";
import ModalAppButton from "../components/ModalAppButton";
import BalanceCard from "./components/BalanceCard";
import LoadingModal from "../components/LoadingModal";
import { useEffect } from "react";
import HistoryPage from "../history_page/HistoryPage";
import { useNavigationState } from "@react-navigation/native";
import ProfileApi from "../../api/user/ProfileApi";
import UseApi from "../../api/UseApi";
import { updateApiSauceSettings } from "../../api/ApiClient";
import * as SecureStore from "expo-secure-store";

const { width, height } = Dimensions.get("screen");

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   // Add event listener for the hardware back button
  //   BackHandler.addEventListener("hardwareBackPress", handleBackPress);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
  //   };
  // }, []);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const handleBackPress = () => {
    if (
      (useNavigationState?.routes?.[0]?.name === "NestedTabs",
      { screen: "Home" })
    ) {
      Alert.alert("Confirmation", "Do you want to logout?", [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => handleLogout() },
      ]);
      return true; // Prevent default behavior (going back)
    }
    return false; // Allow default behavior (going back)
  };

  // calling a function inside a function, helper function
  const LogOutApi = UseApi(ProfileApi.logout);

  const handleLogout = async () => {
    // Perform logout logic here
    LogOutApi.makeRequest();
    await updateApiSauceSettings("");
    await SecureStore.deleteItemAsync("tokenId");
    navigation.replace("loginpage");
  };
  return (
    <AppContainerView>
      {/* header section */}
      <HomePageHeaderSection
        navigateToProfilePage={() => navigation.navigate("profilePage")}
        navigateToNotificationPage={() =>
          navigation.navigate("notificationpage")
        }
      />
      {/* balance at a glance */}
      <BalanceCard addMoneyonPress={() => console.log("didnnt ahappen")} />
      {/* quick actions */}
      <View style={styles.quickActionSection}>
        <QuickActionButton
          title1={"Recieve"}
          onPress={() => navigation.navigate("intiateRecieve")}
          imageSource={require("../../../assets/icons/recieve.png")}
        />
        <QuickActionButton
          title1={"send"}
          onPress={() => navigation.navigate("intiateSend")}
          imageSource={require("../../../assets/icons/send.png")}
        />
        <QuickActionButton
          title1={"History"}
          onPress={() => navigation.navigate("historyPage")}
          imageSource={require("../../../assets/icons/history.png")}
        />
      </View>
      {/* whats new section */}
      <Spacer height={5} />
      <AppText theText={"Whats New"} fontSize={18} fontWeight={"600"} />
      <Image
        source={require("../../../assets/icons/titatransitiamge.png")}
        style={{ width: width * 0.95, height: height * 0.2 }}
      />
      {/* utlity section */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <UtilityButtons
          utilityBtnTitle={"Airtime"}
          tileColor={"#cad3fe"}
          imageSource={require("../../../assets/icons/phone.png")}
          onPress={() => navigation.navigate("sendAirtime")}
        />
        <UtilityButtons
          utilityBtnTitle={"Electricity"}
          tileColor={"#f2f4fa"}
          imageSource={require("../../../assets/icons/electricity.png")}
          onPress={() => navigation.navigate("initiateElectricity")}
        />
        <UtilityButtons
          utilityBtnTitle={"Transport"}
          tileColor={"#decce9"}
          imageSource={require("../../../assets/icons/bus.png")}
        />
        <UtilityButtons
          utilityBtnTitle={"Shopping Card"}
          tileColor={"#f2f4fa"}
          imageSource={require("../../../assets/icons/shopping-cart.png")}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <UtilityButtons
          utilityBtnTitle={"Cable TV"}
          tileColor={"#f2f4fa"}
          imageSource={require("../../../assets/icons/tv.png")}
        />
        <UtilityButtons
          utilityBtnTitle={"Data"}
          tileColor={"#e8dbf0"}
          imageSource={require("../../../assets/icons/data.png")}
        />
        <UtilityButtons
          utilityBtnTitle={"Event Card"}
          tileColor={"#f2f4fa"}
          imageSource={require("../../../assets/icons/calendar.png")}
        />
        <UtilityButtons
          utilityBtnTitle={"See all"}
          tileColor={"#b2bfff"}
          onPress={() => setModalVisible(!modalVisible)}
          imageSource={require("../../../assets/icons/seemore.png")}
        />
      </View>
      {/* pop up modal */}
      <LoadingModal isLoading={modalVisible} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 300,
            width: 300,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginHorizontal: width * 0.15,
            marginVertical: height * 0.3,
          }}
        >
          <AppText theText={"Welcome!"} fontSize={20} fontWeight={"bold"} />
          <Spacer height={10} />
          <AppText
            fontSize={15}
            theText={
              "You are welcome to the  Worlds no.1 Fintech app. Enjoy the Tremendeous Experience."
            }
          />
          <Spacer height={20} />
          <ModalAppButton
            onPress={() => setModalVisible(!modalVisible)}
            ModalAppButtonText={"Lets go"}
          />
        </View>
      </Modal>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quickActionSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
