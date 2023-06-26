/** @format */

import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import AppText from "../../components/AppText";

function AllTransactions({ transactionDetails }) {
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
    <View>
      {transactionDetails != [] ? (
        transactionDetails.map((allTransactions) => (
          <View
            key={allTransactions.id}
            style={{
              marginHorizontal: 10,
              height: 80,
              // backgroundColor: "red",
              marginTop: 10,
            }}
          >
            <AppText theText={formatDate(allTransactions.created_at)} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <AppText theText={allTransactions.id} />
              <AppText
                theText={`+ N ${allTransactions.amount}`}
                color={allTransactions.type === "deposit" ? "green" : "red"}
              />
            </View>
            <AppText
              theText={
                allTransactions.type === "deposit"
                  ? `Payment - ${
                      allTransactions.confirmed == true
                        ? "completed"
                        : "pending"
                    }`
                  : `Send Money - ${
                      allTransactions.confirmed == true
                        ? "completed"
                        : "pending"
                    }`
              }
            />
          </View>
        ))
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
});

export default AllTransactions;
