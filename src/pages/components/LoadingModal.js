/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  ActivityIndicator,
} from "react-native";

function LoadingModal({ isLoading, onPress }) {
  const [modalVisible, setModalVisible] = useState(isLoading);
  return (
    <Modal animationType="fade" visible={isLoading} transparent={true}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255, 0.7)",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={40} color={"#4361EE"} />
        {/* <Button title="close" onPress={onPress} /> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoadingModal;
