/** @format */

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

function Header({ headerTitle, fontSize = 30, fontWeight, canGoBack }) {
  const renderBackButton = () => {
    if (canGoBack) {
      return (
        <TouchableOpacity
          onPress={handleGoBack}
          style={styles.backButtonContainer}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={24}
            color="#3862F8"
            style={styles.backButton}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const handleGoBack = () => {
    // Handle the go back action here
  };

  return (
    <View style={styles.container}>
      {renderBackButton()}
      <View style={styles.headerTextContainer}>
        <AppText
          theText={headerTitle}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color="#3862F8"
          style={styles.headerText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonContainer: {
    width: 24,
    marginLeft: 8,
  },
  backButton: {},
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Added to vertically center the header text
  },
  headerText: {
    textAlign: "center",
  },
});

export default Header;
