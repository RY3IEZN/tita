/** @format */

import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import BankTransfer from "./pages/BankTransfer";
import CheckVoucher from "./pages/CheckVoucher";
import LoadVoucher from "./pages/LoadVoucher";
import LoadVoucher2 from "./pages/LoadVoucher";
import SavedCards from "./pages/SavedCards";
import UssdCode from "./pages/UssdCode";

function InitiateRecieve(props) {
  const categories = ["Load Voucher", "Bank Transfer", "USSD Transfer", "Card"];
  const [categoryIndex, setCategoryIndex] = useState(5);

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
      <Header headerTitle={"Receive"} />
      <Spacer height={20} />
      <CategoriesList />
      {categoryIndex == 0 ? (
        <CheckVoucher />
      ) : categoryIndex == 5 ? (
        <LoadVoucher />
      ) : (
        ""
      )}
      {categoryIndex == 1 ? <BankTransfer /> : ""}
      {categoryIndex == 2 ? <UssdCode /> : ""}
      {categoryIndex == 3 ? <SavedCards /> : ""}
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  categoryText: {
    color: "grey",
    fontWeight: "bold",
  },
  categoriescontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryselected: {
    color: "#3862F8",
    fontWeight: "bold",
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: "#3862F8",
  },
});

export default InitiateRecieve;
