/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppContainerView from "../components/AppContainerView";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import BankTransfer from "../recieve_transactions/pages/BankTransfer";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";

const { width, height } = Dimensions.get("screen");

function HelpScreen(props) {
  const categories = ["FAQs", "Contact Us"];
  const [categoryIndex, setCategoryIndex] = useState(0);

  const CategoriesList = ({ navigation }) => {
    return (
      <View style={styles.categoriescontainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.08}
            key={index}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryselected,
                categoryIndex != index && styles.categoryUnselected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <AppContainerView>
      <Header headerTitle={"Help & Support"} />
      <Spacer height={20} />
      <CategoriesList />
      {categoryIndex == 0 ? <Faqs /> : ""}
      {categoryIndex == 1 ? <ContactUs /> : ""}
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  categoriescontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 25,
    alignItems: "center",
  },
  categoryselected: {
    color: "#3862F8",
    fontWeight: "bold",
    borderBottomWidth: 5,
    width: width * 0.4,
    paddingBottom: 5,
    borderColor: "#3862F8",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryUnselected: {
    color: "grey",
    fontWeight: "bold",
    borderBottomWidth: 2,
    width: width * 0.38,
    paddingBottom: 5,
    borderColor: "grey",
  },
});

export default HelpScreen;
