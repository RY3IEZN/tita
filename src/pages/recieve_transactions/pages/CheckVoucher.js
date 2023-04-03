/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import CustomModal from "../../components/CustomModal";
import LoadingModal from "../../components/LoadingModal";
import ModalAppButton from "../../components/ModalAppButton";
import Spacer from "../../components/Spacer";
import CustomeTextInputField from "../../profile_page/components/CustomeTextInputField";
import CustomTextInputField2 from "../components/CustomTextInputField2";
import LoadVouchersvg from "../../../../assets/svg/LoadVouchersvg";

const { width, height } = Dimensions.get("screen");

function CheckVoucher(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Spacer height={30} />
        <LoadVouchersvg />
        <Spacer height={10} />
        <AppText
          textAlign={"center"}
          theText={
            "Add Money to your TITA Bank Account by Loading a TITA Voucher Token and card pin below"
          }
        />
        <CustomeTextInputField inputTitle={"Voucher code"} />
        <Spacer height={30} />
        <AppButton
          AppBtnText={"Verify"}
          onPress={() => setShowLoadingModal(!showLoadingModal)}
        />
        <AppButton
          AppBtnText={"Verify"}
          onPress={() => setShowSuccessModal(!showSuccessModal)}
        />
        <LoadingModal
          isLoading={showLoadingModal}
          onPress={() => setShowLoadingModal(false)}
        />
        <CustomModal
          showSuccess={showSuccessModal}
          onPress={() => setShowSuccessModal(false)}
        />
        {/* pop up modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
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
            <AppText
              theText={"Congratulations!"}
              fontSize={20}
              fontWeight={"bold"}
            />
            <Spacer height={10} />
            <AppText fontSize={15} theText={"Your voucher is still."} />
            <AppText fontSize={15} theText={"valid with N5000."} />
            <Spacer height={20} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AppText theText={"I'll load it later"} />
              <TouchableOpacity
                style={styles.appBtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AppText theText={"Enter Pin"} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  appBtn: {
    marginHorizontal: 15,
    height: 55,
    width: 85,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4361EE",
    backgroundColor: "#4361EE",
  },
});

export default CheckVoucher;
