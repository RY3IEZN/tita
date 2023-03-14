/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/pages/home_page/HomeScreen";
import LoginPage from "./src/pages/login_page/LoginPage";
import AppNavigator from "./src/pages/navigators/AppNavigator";
import QrPage from "./src/pages/profile_page/QrPage";
import InitiateSendingPage from "./src/pages/send_transactions/InitiateSendingPage";
import EnterAmount from "./src/pages/send_transactions/pages/EnterAmount";
import InitiateVoucherTransfer from "./src/pages/send_transactions/pages/InitiateVoucherTransfer";
import TransferToTita from "./src/pages/send_transactions/pages/TransferToTita";
import TransactionDetails from "./src/pages/send_transactions/TransactionDetails";
import TransactionFailed from "./src/pages/send_transactions/TransactionFailed";
import TransactionSuccessful from "./src/pages/send_transactions/TransactionSuccessful";
import TransferType from "./src/pages/send_transactions/TransferType";
import AddPhoneNumber from "./src/pages/sign_up/AddPhoneNumber";
import Authentication from "./src/pages/sign_up/Authentication";
import ChooseWallet from "./src/pages/sign_up/ChooseWallet";
import CreateAccount from "./src/pages/sign_up/CreateAccount";
import Verify from "./src/pages/sign_up/Verify";
import SplashScreen from "./src/pages/Splash_Screen/SplashScreen";
import SendAirtime from "./src/pages/utility_pages/Airtime/SendAirtime";
import InitiateElectricity from "./src/pages/utility_pages/Electricity/InitiateElectricity";
import Teststheview from "./Teststheview";

export default function App() {
  return <EnterAmount />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
