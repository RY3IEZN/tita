/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/pages/navigators/AppNavigator";
import QrPage from "./src/pages/profile_page/QrPage";
import InitiateSendingPage from "./src/pages/send_transactions/InitiateSendingPage";
import TransactionFailed from "./src/pages/send_transactions/TransactionFailed";
import TransactionSuccessful from "./src/pages/send_transactions/TransactionSuccessful";
import AddPhoneNumber from "./src/pages/sign_up/AddPhoneNumber";
import Authentication from "./src/pages/sign_up/Authentication";
import CreateAccount from "./src/pages/sign_up/CreateAccount";
import Verify from "./src/pages/sign_up/Verify";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
