/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from "../../components/AppText";

const { width, height } = Dimensions.get("screen");

function ExpandableCards({ cardTitle, faqText }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <View style={styles.cardHeader}>
            <AppText theText={cardTitle} />
            <MaterialCommunityIcons
              name={expanded ? "menu-up" : "menu-down"}
              size={40}
              color={"blue"}
            />
          </View>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.cardBody}>
            <View style={{ width: width * 0.8, borderWidth: 0.5 }}></View>
            <AppText theText={faqText} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e1e1e1",
    margin: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cardBody: {
    padding: 10,
  },
});

export default ExpandableCards;
