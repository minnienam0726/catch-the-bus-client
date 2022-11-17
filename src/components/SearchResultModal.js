import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

import { COLOR, MESSAGE } from "../api/constants";

const SearchResultModal = () => {
  const MOCK_DATA = "1001";
  return (
    <View style={styles.screenContainer}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.guideText}>{MESSAGE.RIDE_BUS}</Text>
            <Text style={styles.returnValueText}>{MOCK_DATA}</Text>
            <TouchableOpacity style={styles.homeButton}>
              <Text style={styles.homeButtonText}>처음으로</Text>
            </TouchableOpacity>
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
    margin: 20,
    borderRadius: 20,
    backgroundColor: COLOR.BLACK,
  },
  guideText: {
    marginBottom: 30,
    color: COLOR.WHITE,
    fontSize: 15,
  },
  returnValueText: {
    color: COLOR.RED,
    fontSize: 40,
  },
  homeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: COLOR.BLUE,
  },
  homeButtonText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
});

export { SearchResultModal };
