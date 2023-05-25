/** @format */

import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import DatePicker from "react-native-modern-datepicker";

function CalendarModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={showCalendar}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              style={{ width: 400 }}
              date={selectedDate}
              mode="date"
              placeholder="Select date"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              maxDate="31-12-2100"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={handleDateChange}
            />
            <TouchableOpacity onPress={() => setShowCalendar(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CalendarModal;
