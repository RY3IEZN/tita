/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppContainerView from "../components/AppContainerView";
import Spacer from "../components/Spacer";
import { useState } from "react";
import Header from "../components/Header";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

function HistoryPage(props) {
  const categories = ["All", "Recieved", "Sent"];
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
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  categoryText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  categoriescontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  categoryselected: {
    color: "#3862F8",
    fontWeight: "bold",
    borderBottomWidth: 5,
    width: width * 0.3,
    paddingBottom: 5,
    borderColor: "#3862F8",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryUnselected: {
    color: "grey",
    fontWeight: "bold",
    borderBottomWidth: 2,
    width: width * 0.3,
    paddingBottom: 5,
    borderColor: "grey",
  },
});

export default HistoryPage;
