/** @format */

import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import AppText from "../../components/AppText";
import Spacer from "../../components/Spacer";
import ContactUsCard from "../components/ContactUsCard";

const { width, height } = Dimensions.get("screen");
function ContactUs(props) {
  return (
    <View style={styles.container}>
      <Spacer height={15} />
      <ContactUsCard
        cardTitleText={"Customer Service"}
        imgSource={require("../../../../assets/icons/headphone.png")}
      />
      <ContactUsCard
        cardTitleText={"Whatsapp"}
        imgSource={require("../../../../assets/icons/whatsapp.png")}
      />
      <ContactUsCard
        cardTitleText={"Website"}
        imgSource={require("../../../../assets/icons/website.png")}
      />
      <ContactUsCard
        cardTitleText={"Call us"}
        imgSource={require("../../../../assets/icons/Call.png")}
      />
      <ContactUsCard
        cardTitleText={"Send us an email"}
        imgSource={require("../../../../assets/icons/email.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default ContactUs;
