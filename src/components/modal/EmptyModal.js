/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Clipboard,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AppText from "../../pages/components/AppText";
import AppButton from "../../pages/components/AppButton";
// import AppText from "./src/pages/components/AppText";
// import appcolors from "../../config/appcolors";
// import AppText from "../page/AppText";

const EmptyModal = ({ isModalVisible = false, onModalClose = null, data }) => {
  const [modalVisible, setModalVisible] = useState(isModalVisible);

  return (
    <View style={{}}>
      {/* The Modal */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => onModalClose && onModalClose(false)}
        style={{ backgroundColor: "red" }}
      >
        <TouchableWithoutFeedback
          onPress={() => onModalClose && onModalClose(false)}
        >
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              {/* modal header */}
              <View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <TouchableOpacity
                    onPress={() => onModalClose && onModalClose(false)}
                  >
                    {/* <MaterialCommunityIcons name="close" size={24} /> */}
                    <View
                      style={{
                        width: 70,
                        height: 7,
                        backgroundColor: "#C4C4C4",
                        borderRadius: 10,
                      }}
                    ></View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Modal Content */}
              <View style={{ marginTop: 32 }}>
                <AppButton />
              </View>

              {/* modal footer */}
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => onModalClose && onModalClose(false)}
                >
                  <AppText theText={"Cancel"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default EmptyModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: appcolors.light,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(11, 14, 9, 0.6)",
    // backgroundColor: "red",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    maxHeight: "70%",
    // minHeight: "30%",
    paddingTop: 30,
    paddingHorizontal: 25,
    paddingBottom: 15,
    paddingVertical: 40,
  },
});
