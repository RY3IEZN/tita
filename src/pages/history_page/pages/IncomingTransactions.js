/** @format */

import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import AppText from "../../components/AppText";

function IncomingTransactions({ transactionDetails }) {
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
      {transactionDetails == [] ? (
        transactionDetails.map((deposit) => (
          <View
            key={deposit.id}
            style={{
              marginHorizontal: 10,
              height: 80,
              marginTop: 10,
            }}
          >
            <AppText theText={formatDate(deposit.created_at)} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <AppText theText={deposit.id} />
              <AppText
                theText={`+ N ${deposit.amount}`}
                color={deposit.type === "deposit" ? "green" : "red"}
              />
            </View>
            <AppText
              theText={
                deposit.type === "deposit"
                  ? `Payment - ${
                      deposit.confirmed == true ? "completed" : "pending"
                    }`
                  : `Send Money - ${
                      deposit.confirmed == true ? "completed" : "pending"
                    }`
              }
            />
          </View>
        ))
      ) : (
        <ActivityIndicator color={"blue"} size={30} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default IncomingTransactions;
