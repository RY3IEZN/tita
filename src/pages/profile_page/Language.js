/** @format */

import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import AppContainerView from "../components/AppContainerView";
import AppText from "../components/AppText";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Text } from "react-native";
import LineDivider from "../components/LineDivider";

const { width, height } = Dimensions.get("screen");

function Language(props) {
  const languages = [
    { id: 1, title: "English", subtitle: "British" },
    { id: 2, title: "French", subtitle: "France" },
    { id: 3, title: "Spanish", subtitle: "Spain" },
    { id: 4, title: "German", subtitle: "Germany" },
    { id: 5, title: "Italian", subtitle: "Italy" },
    { id: 6, title: "Portuguese", subtitle: "Portugal" },
    { id: 7, title: "Dutch", subtitle: "Netherlands" },
    { id: 8, title: "Swedish", subtitle: "Sweden" },
    { id: 9, title: "Norwegian", subtitle: "Norway" },
    { id: 10, title: "Danish", subtitle: "Denmark" },
    { id: 11, title: "Finnish", subtitle: "Finland" },
    { id: 12, title: "Greek", subtitle: "Greece" },
    { id: 13, title: "Russian", subtitle: "Russia" },
    { id: 14, title: "Polish", subtitle: "Poland" },
    { id: 15, title: "Czech", subtitle: "Czech Republic" },
    { id: 16, title: "Hungarian", subtitle: "Hungary" },
    { id: 17, title: "Romanian", subtitle: "Romania" },
    { id: 18, title: "Turkish", subtitle: "Turkey" },
    { id: 19, title: "Arabic", subtitle: "United Arab Emirates" },
    { id: 20, title: "Hindi", subtitle: "India" },
    { id: 21, title: "Bengali", subtitle: "Bangladesh" },
    { id: 22, title: "Urdu", subtitle: "Pakistan" },
    { id: 23, title: "Indonesian", subtitle: "Indonesia" },
    { id: 24, title: "Malay", subtitle: "Malaysia" },
    { id: 25, title: "Japanese", subtitle: "Japan" },
    { id: 26, title: "Chinese", subtitle: "China" },
    { id: 27, title: "Korean", subtitle: "South Korea" },
    { id: 28, title: "Thai", subtitle: "Thailand" },
    { id: 29, title: "Vietnamese", subtitle: "Vietnam" },
    { id: 30, title: "Filipino", subtitle: "Philippines" },
  ];

  const renderLanguage = ({ item }) => (
    <View style={styles.languageContainer}>
      <Text style={styles.languageTitle}>
        {item.title} ({item.subtitle})
      </Text>
      <Text style={styles.subtitle}>
        {item.title} ({item.subtitle})
      </Text>
    </View>
  );

  return (
    <AppContainerView>
      <Header headerTitle={"Language"} />
      <Spacer height={10} />
      <View style={styles.searchBoxSection}>
        <View style={styles.searchBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Spacer width={5} />
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color={"#8e8e93"}
            />
            <Spacer width={5} height={5} />
            <TextInput placeholder="Search" style={{ width: width * 0.6 }} />
          </View>
          <View>
            <MaterialCommunityIcons
              name="microphone"
              size={20}
              color={"#8e8e93"}
            />
          </View>
        </View>
        <Spacer width={10} />
        <AppText
          theText={"Cancel"}
          color={"#4361ee"}
          fontSize={15}
          fontWeight={"500"}
        />
      </View>
      <AppText theText={"Select Language"} color={"#8e8e93"} />
      <FlatList
        data={languages}
        renderItem={renderLanguage}
        keyExtractor={(item) => item.id.toString()}
      />
    </AppContainerView>
  );
}

const styles = StyleSheet.create({
  container: {},
  searchBoxSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBox: {
    width: width * 0.74,
    backgroundColor: "#7676801F",
    height: 40,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  languageTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  languageSubtitle: {
    fontSize: 14,
    color: "#888",
  },
});

export default Language;
