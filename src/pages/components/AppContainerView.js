/** @format */

import React from "react";
import { SafeAreaView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";

function AppContainerView({ children }) {
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView>
            <View style={styles.container}>{children}</View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  background: {
    backgroundColor: "#f6f8ff",
    flex: 1,
  },
});

export default AppContainerView;
