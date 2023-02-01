/** @format */

import React, { useState } from "react";
import { View, StyleSheet, Modal, Dimensions } from "react-native";
import AppText from "./AppText";
import ModalAppButton from "./ModalAppButton";
import Spacer from "./Spacer";

const { width, height } = Dimensions.get("screen");

function CustomModal({ showSuccess, onPress }) {
  const [modalVisible, setModalVisible] = useState(showSuccess);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showSuccess}
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 300,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginHorizontal: width * 0.15,
          marginVertical: height * 0.3,
        }}
      >
        <AppText theText={"Welcome!"} fontSize={20} fontWeight={"bold"} />
        <Spacer height={10} />
        <AppText
          fontSize={15}
          theText={
            "You are welcome to the  Worlds no.1 Fintech app. Enjoy the Tremendeous Experience."
          }
        />
        <Spacer height={20} />
        <ModalAppButton onPress={onPress} ModalAppButtonText={"Lets go"} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CustomModal;
