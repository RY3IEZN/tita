/** @format */

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Splash_Screen/SplashScreen";
import OnboardingScreen from "../Onboarding/OnboardingScreen";
import WelcomeScreen from "../welcome_screen/WelcomeScreen";
import HomeScreen from "../home_page/HomeScreen";
import ProfilePage from "../profile_page/ProfilePage";
import Help_Screen from "../help_screen/HelpScreen";
import HelpScreen from "../help_screen/HelpScreen";
import InvestScreen from "../invest_page/InvestScreen";
import ChangePin1 from "../change_pin/ChangePin1";
import ChangePinForm from "../change_pin/ChangePinForm";
import EditProfilePage from "../profile_page/EditProfilePage";
import UpdateKyc from "../update_kyc/UpdateKyc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginPage from "../login_page/LoginPage";
import InitiateSendingPage from "../send_transactions/InitiateSendingPage";
import InitiateRecieve from "../recieve_transactions/InitiateRecieve";
import QrPage from "../profile_page/QrPage";
import CreateAccount from "../sign_up/CreateAccount";
import NotificationPage from "../home_page/NotificationPage";
import SendAirtime from "../utility_pages/Airtime/SendAirtime";
import InitiateElectricity from "../utility_pages/Electricity/InitiateElectricity";
import InitiateVoucherTransfer from "../send_transactions/pages/InitiateVoucherTransfer";
import TransferType from "../send_transactions/TransferType";
import EnterAmount from "../send_transactions/pages/EnterAmount";
import EnterPin from "../send_transactions/pages/EnterPin";
import TransactionSuccessful from "../send_transactions/TransactionSuccessful";
import ResetPassword from "../reset_password/ResetPassword";
import ChooseWallet from "../sign_up/ChooseWallet";
import AddPhoneNumber from "../sign_up/AddPhoneNumber";
import HistoryPage from "../history_page/HistoryPage";
import KycPage1 from "../update_kyc/KycPage1";
import KycPage2 from "../update_kyc/KycPage2";
import KycPage3 from "../update_kyc/KycPage3";
import KycPage4 from "../update_kyc/KycPage4";
import Authentication from "../sign_up/Authentication";
import TransferToTita from "../send_transactions/pages/TransferToTita";
import AddMoneyPage from "../home_page/AddMoneyPage";
import ElectricityConfirmationPage from "../utility_pages/Electricity/ElectricityConfirmationPage";
import VoucherDetails from "../send_transactions/pages/VoucherDetails";
import RequestVirtualCardPage from "../home_page/RequestVirtualCardPage";
import Language from "../profile_page/Language";
import PrivacyPolicy from "../profile_page/PrivacyPolicy";
import SecurityPage from "../profile_page/SecurityPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NestedTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4361EE",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#4361EE",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Image source={require("../../../assets/icons/titaLogo.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={RequestVirtualCardPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/icons/cards.png")}
              style={{
                tintColor: focused ? "#4361EE" : "grey",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/icons/profile.png")}
              style={{
                tintColor: focused ? "#4361EE" : "grey",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/icons/message-question.png")}
              style={{
                tintColor: focused ? "#4361EE" : "grey",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splashscreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NestedTabs"
          component={NestedTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcomepage"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="resetpasswordpage"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="changepin"
          component={ChangePin1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="choosewalletpage"
          component={ChooseWallet}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addphonenumber"
          component={AddPhoneNumber}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="changepinform"
          component={ChangePinForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="editprofilepage"
          component={EditProfilePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="updatekyc"
          component={UpdateKyc}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loginpage"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="intiateSend"
          component={InitiateSendingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="intiateRecieve"
          component={InitiateRecieve}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="qrpage"
          component={QrPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="createAccount"
          component={CreateAccount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profilePage"
          component={ProfilePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="historyPage"
          component={HistoryPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="notificationpage"
          component={NotificationPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sendAirtime"
          component={SendAirtime}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="initiateElectricity"
          component={InitiateElectricity}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="initiateVoucherTransfer"
          component={InitiateVoucherTransfer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="transferTypePage"
          component={TransferType}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="enterAmount"
          component={EnterAmount}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pinauthentication"
          component={Authentication}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="enterPin"
          component={EnterPin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="transactionSuccessful"
          component={TransactionSuccessful}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TransferToTita"
          component={TransferToTita}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="kycpage1"
          component={KycPage1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="kycpage2"
          component={KycPage2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="kycpage3"
          component={KycPage3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="kycpage4"
          component={KycPage4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addmoneypage"
          component={AddMoneyPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ElectricityConfirmationPage"
          component={ElectricityConfirmationPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="voucherdetailspage"
          component={VoucherDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="languagepage"
          component={Language}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="privacypolicy"
          component={PrivacyPolicy}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="securitypage"
          component={SecurityPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
