/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

function PageIndicator({ pageIndex }) {
  const CurrentStep = () => {
    return (
      <View
        style={{
          height: 5,
          width: 50,
          borderRadius: 10,
          backgroundColor: "blue",
          marginHorizontal: 5,
        }}
      ></View>
    );
  };

  const NextStep = () => {
    return (
      <View
        style={{
          height: 5,
          width: 50,
          borderRadius: 10,
          backgroundColor: "#D9D9D9",
          marginHorizontal: 5,
        }}
      ></View>
    );
  };

  return (
    <View style={{ flexDirection: "row", marginHorizontal: 40 }}>
      {pageIndex >= 1 ? <CurrentStep /> : <CurrentStep />}
      {pageIndex >= 2 ? <CurrentStep /> : <NextStep />}
      {pageIndex >= 3 ? <CurrentStep /> : <NextStep />}
      {pageIndex >= 4 ? <CurrentStep /> : <NextStep />}
      {pageIndex >= 5 ? <CurrentStep /> : <NextStep />}
    </View>
  );
}

const styles = StyleSheet.create({});

export default PageIndicator;
