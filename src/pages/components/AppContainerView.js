/** @format */

import React from "react";
import { SafeAreaView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";

function AppContainerView({ children, marginTop = 40 }) {
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: marginTop,
              }}
            >
              {children}
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  background: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
});

export default AppContainerView;
