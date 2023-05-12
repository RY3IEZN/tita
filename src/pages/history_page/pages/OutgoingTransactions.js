/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText";

function OutgoingTransactions({ transactionDetails }) {
  return (
    <View style={styles.container}>
      <AppText theText={transactionDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
});

export default OutgoingTransactions;
