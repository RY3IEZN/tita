/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import Visacardsample from "../../../assets/svg/Visacardsample";
import AppText from "../components/AppText";
import RequestVirtualCardFeatures from "./components/RequestVirtualCardFeatures";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
import Welcomepagesvg from "../../../assets/svg/Welcomepagesvg";
import Cardsecurity from "../../../assets/svg/Cardsecurity";
import Cardsafety from "../../../assets/svg/Cardsafety";
import Instantaccess from "../../../assets/svg/Instantaccess";

function RequestVirtualCardPage(props) {
  return (
    <AppContainerView>
      <Header headerTitle={"Cards"} />
      <Spacer height={10} />
      <Image
        source={require("../../../assets/icons/visacard.png")}
        style={{ width: "100%", height: 225 }}
      />
      <Spacer height={20} />
      <RequestVirtualCardFeatures
        title={"Instant Access"}
        subTitle={"Apply and activate Instantly"}
        imgUrl={require("../../../assets/icons/instantaccess.png")}
        Svg_img={<Instantaccess />}
      />
      <Spacer height={10} />
      <RequestVirtualCardFeatures
        title={"Safety"}
        subTitle={"Feel secure while accessing your funds"}
        Svg_img={<Cardsafety />}
      />
      <Spacer height={10} />
      <RequestVirtualCardFeatures
        title={"Security"}
        subTitle={"licensed and regulated by CBN"}
        Svg_img={<Cardsecurity />}
      />
      <Spacer height={20} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <AppButton AppBtnText={"Coming Soon"} />
      </View>
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RequestVirtualCardPage;
