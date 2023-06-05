/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../../components/AppText";

function OutgoingTransactions({ transactionDetails }) {
  function formatDate(dateTime) {
    const dateObj = new Date(dateTime);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    return formattedDate;
  }

  return (
    <View style={styles.container}>
      {transactionDetails.map((withdrwal) => (
        <View
          key={withdrwal.id}
          style={{
            marginHorizontal: 10,
            height: 80,
            marginTop: 10,
          }}
        >
          <AppText theText={formatDate(withdrwal.created_at)} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppText theText={withdrwal.id} />
            <AppText
              theText={`+ N ${withdrwal.amount}`}
              color={withdrwal.type === "withdrwal" ? "green" : "red"}
            />
          </View>
          <AppText
            theText={
              withdrwal.type === "withdrwal"
                ? `Payment - ${
                    withdrwal.confirmed == true ? "completed" : "pending"
                  }`
                : `Send Money - ${
                    withdrwal.confirmed == true ? "completed" : "pending"
                  }`
            }
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default OutgoingTransactions;
