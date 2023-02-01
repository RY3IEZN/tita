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
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#4361EE",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="wallet"
              size={25}
              color={focused ? "#4361EE" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={InvestScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="currency-usd"
              size={25}
              color={focused ? "#4361EE" : "grey"}
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
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={25}
              color={focused ? "#4361EE" : "grey"}
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
            <MaterialCommunityIcons
              name="help-circle-outline"
              size={25}
              color={focused ? "#4361EE" : "grey"}
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
          name="changepin"
          component={ChangePin1}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
