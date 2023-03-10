/** @format */

import React from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";

function Teststheview({ pageIndex = 1 }) {
  const CurrentStep = () => {
    return (
      <View
        style={{
          height: 10,
          width: 60,
          borderRadius: 10,
          backgroundColor: "blue",
          marginHorizontal: 10,
        }}
      ></View>
    );
  };

  const NextStep = () => {
    return (
      <View
        style={{
          height: 10,
          width: 60,
          borderRadius: 10,
          backgroundColor: "grey",
          marginHorizontal: 10,
        }}
      ></View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        {pageIndex >= 1 ? <CurrentStep /> : <CurrentStep />}
        {pageIndex >= 2 ? <CurrentStep /> : <NextStep />}
        {pageIndex >= 3 ? <CurrentStep /> : <NextStep />}
        {pageIndex >= 4 ? <CurrentStep /> : <NextStep />}
        {pageIndex >= 5 ? <CurrentStep /> : <NextStep />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {},
});

export default Teststheview;
