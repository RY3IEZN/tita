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
} from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import AppText from "../components/AppText";
import Spacer from "../components/Spacer";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const { width, height } = Dimensions.get("screen");

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required").label("username"),
  password: Yup.string().required("Required").min(8).label("password"),
});

function LoginPage(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [loginError, setLoginError] = useState(null);

  return (
    <AppContainerView>
      <Header headerTitle={"Login"} />
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../../../assets/icons/loginpage.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        // validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <View style={{ alignItems: "center" }}>
              {/* username */}
              <View style={styles.textInputBox}>
                <View style={{ marginHorizontal: 10 }}>
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={24}
                    color="#4361EE"
                  />
                </View>
                <TextInput
                  placeholder="Username"
                  onChangeText={handleChange("username")}
                  value={values.username}
                  style={{ width: width * 0.75 }}
                />
              </View>
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
            </View>
            <View
              style={{ textAlign: "right", marginTop: 10, marginBottom: 150 }}
            >
              <AppText textAlign={"right"} theText={"Forgot Password?"} />
            </View>

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
          marginTop: 50,
        }}
      >
        <AppText theText={"Not a Member yet?"} />
        <Spacer width={5} />
        <AppText
          theText={"Register now"}
          color={"#3862F8"}
          textDecorationLine={"underline"}
        />
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
    marginTop: 10,
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
