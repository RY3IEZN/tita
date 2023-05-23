/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import Spacer from "../components/Spacer";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import apiClient, { updateApiSauceSettings } from "../../api/ApiClient";
import UseApi from "../../api/UseApi";
import AuthApi from "../../api/auth/AuthApi";
import { useEffect } from "react";
import LoginPageSvg from "../../../assets/svg/LoginPageSvg";
import axios, { Axios } from "axios";

const { width, height } = Dimensions.get("screen");

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").label("Username").email(),
  password: Yup.string().required("Required").min(6).label("Password"),
});

function LoginPage({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);
  const [loginError, setLoginError] = useState(null);

  // // calling a function inside a function, helper function
  const loginUserApi = UseApi(AuthApi.login);

  // onsubmit function to post
  const onFormSubmit = (values) => {
    loginUserApi.makeRequest(values);
  };

  useEffect(() => {
    if (loginUserApi.data) {
      responseAction();
    }
  }, [loginUserApi.data]);

  // running during authentication
  const responseAction = async (values) => {
    if (loginUserApi.statusCode == "200") {
      await updateApiSauceSettings(loginUserApi.data.token);
      navigation.navigate("NestedTabs", { screen: "Home" });
    }
    if (loginUserApi.statusCode == "422") {
      Alert.alert(
        "Inavlid Credentials",
        "These credentials do not match our records. Kindly check your email or password"
      );
    }
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Login"} canGoBack />
      <View style={{ alignItems: "center" }}>
        <LoginPageSvg />
        <Spacer height={30} />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          onFormSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View style={{ alignItems: "center" }}>
              {/* email */}
              <View style={styles.textInputBox}>
                <View style={{ marginHorizontal: 10 }}>
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={24}
                    color="#4361EE"
                  />
                </View>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Username"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  style={{ width: width * 0.75 }}
                />
              </View>
              <AppText theText={errors.email} />
              {/* password */}
              <View style={styles.textInputBox2}>
                <View style={{ marginHorizontal: 10 }}>
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="#4361EE"
                  />
                </View>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  style={{ width: width * 0.65 }}
                  secureTextEntry={isVisible}
                />
                <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                  <MaterialCommunityIcons
                    name={isVisible ? "eye" : "eye-off"}
                    size={24}
                    color="#4361EE"
                  />
                </TouchableOpacity>
              </View>
              <AppText theText={errors.password} />
            </View>
            {/* forgot password?  */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("resetpasswordpage");
              }}
              style={{ textAlign: "right", marginTop: 10, marginBottom: 110 }}
            >
              <AppText textAlign={"right"} theText={"Forgot Password?"} />
            </TouchableOpacity>

            {/* how do you implment fingerprint verification na */}
            <View style={{ alignItems: "center" }}>
              <AppButton AppBtnText={"Login"} onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: height * 0.03,
        }}
      >
        <AppText theText={"Not a Member yet?"} />
        <Spacer width={2} />
        <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
          <AppText
            theText={"Register now"}
            color={"#3862F8"}
            textDecorationLine={"underline"}
          />
        </TouchableOpacity>
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInputBox: {
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  textInputBox2: {
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LoginPage;
