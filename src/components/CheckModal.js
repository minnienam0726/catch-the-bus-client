import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

import { COLOR, MESSAGE } from "../api/constants";

const CheckModal = () => {
  const MOCK_DATA = "방배역\n01-123";
  return (
    <View style={styles.screenContainer}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.checkText}>{MESSAGE.CHECK_DEPARTURE}</Text>
            <Text style={styles.returnValueText}>{MOCK_DATA}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backButtonText}>다시</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.checkButton}>
                <Text style={styles.checkButtonText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLOR.BLACK,
  },
  checkText: {
    color: COLOR.WHITE,
    fontSize: 15,
  },
  returnValueText: {
    color: COLOR.YELLOW,
    fontSize: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: COLOR.WHITE,
  },
  backButtonText: {
    color: COLOR.BLUE,
    fontSize: 20,
  },
  checkButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: COLOR.BLUE,
  },
  checkButtonText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
});

export { CheckModal };
