/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TextInput, Alert } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import Checkbox from "expo-checkbox";
import Spacer from "../components/Spacer";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native";
import PageIndicator from "../components/PageIndicator";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const { width, height } = Dimensions.get("screen");

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("Required").label("first_name"),
  last_name: Yup.string().required("Required").label("lastname"),
  password: Yup.string().required("Required").min(6).label("Password"),
  email: Yup.string().required("Required").label("email").email(),
});

function CreateAccount({ navigation }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckBox = () => {
    setIsSelected(!isSelected);
  };
  const passValuesToNextPage = async (values) => {
    if (!isSelected) {
      Alert.alert(
        "Terms and Conditions",
        "You havent accepted the terms and conditions"
      );
    } else {
      navigation.navigate("choosewalletpage", { values });
    }
  };

  return (
    <AppContainerView>
      <View style={{ alignItems: "center" }}>
        <Header headerTitle={"Create Account"} />
        <Spacer height={20} />
        <PageIndicator />
        <Spacer height={20} />
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            date_of_birth: "",
          }}
          onSubmit={passValuesToNextPage}
          // validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              {/* first_name */}
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
                  placeholder="firstname"
                  onChangeText={handleChange("first_name")}
                  value={values.first_name}
                  style={{ width: width * 0.75 }}
                />
              </View>
              {errors.first_name ? <AppText theText={errors.first_name} /> : ""}
              {/* last_name */}
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
                  placeholder="Lastname"
                  onChangeText={handleChange("last_name")}
                  value={values.last_name}
                  style={{ width: width * 0.75 }}
                />
              </View>
              {errors.last_name ? <AppText theText={errors.last_name} /> : ""}

              {/* date of birth */}
              <View style={styles.textInputBox}>
                <View style={{ marginHorizontal: 10 }}>
                  <MaterialCommunityIcons
                    name="calendar"
                    size={24}
                    color="#4361EE"
                  />
                </View>
                <TextInput
                  placeholder="Date of birth"
                  autoCapitalize="none"
                  onChangeText={handleChange("date_of_birth")}
                  value={values.date_of_birth}
                  style={{ width: width * 0.75 }}
                />
              </View>
              {/* email address */}
              <View style={styles.textInputBox}>
                <View style={{ marginHorizontal: 10 }}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="#4361EE"
                  />
                </View>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  style={{ width: width * 0.75 }}
                />
              </View>
              {errors.email ? <AppText theText={errors.email} /> : ""}

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
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  style={{ width: width * 0.63 }}
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
              {errors.password ? <AppText theText={errors.password} /> : ""}

              {/* confirm password */}
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
                  placeholder="Confirm Password"
                  onChangeText={handleChange("password_confirmation")}
                  value={values.password_confirmation}
                  style={{ width: width * 0.63 }}
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
              {errors.password_confirmation ? (
                <AppText theText={errors.password_confirmation} />
              ) : (
                ""
              )}

              <Spacer height={10} />
              <AppButton AppBtnText={"Register"} onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Spacer height={21} />
        {/* checkbox */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          <Checkbox
            value={isSelected}
            onValueChange={handleCheckBox}
            color={"blue"}
          />
          <Spacer width={10} />
          <AppText
            theText={"I accept the Terms and Conditions          Policy"}
          />
        </View>
        <Spacer height={45} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText theText={"Already have an account?"} />
          <Spacer width={5} />
          <TouchableOpacity onPress={() => navigation.navigate("loginpage")}>
            <AppText
              theText={"Login"}
              color={"#3862F8"}
              textDecorationLine={"underline"}
            />
          </TouchableOpacity>
        </View>
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
    marginVertical: 15,
  },
  textInputBox2: {
    marginTop: 15,
    marginVertical: 10,
    borderWidth: 1,
    height: 55,
    width: width * 0.85,
    borderRadius: 15,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CreateAccount;
