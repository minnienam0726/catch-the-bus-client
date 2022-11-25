import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

import { COLOR } from "../api/constants";

const SearchResultModal = ({
  isSearchResultModalOpen,
  setIsSearchResultModalOpen,
  setNavigateHome,
  searchResult,
}) => {
  const MOCK_DATA = "1001";

  return (
    <View style={styles.screenContainer}>
      <Modal
        visible={isSearchResultModalOpen}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.guideText}>이 버스를 탑승하세요!</Text>
            <Text style={styles.returnValueText}>{MOCK_DATA}</Text>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => {
                setNavigateHome(true);
                setIsSearchResultModalOpen(false);
              }}
            >
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
    opacity: 0.7,
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
