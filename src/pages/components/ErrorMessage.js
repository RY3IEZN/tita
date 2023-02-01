/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText theText={error} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default ErrorMessage;
