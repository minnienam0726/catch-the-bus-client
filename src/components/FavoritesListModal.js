import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

import { COLOR, STAR } from "../api/constants";

const FavoritesListModal = ({
  isFavoritesListModalOpen,
  setIsFavoritesListModalOpen,
}) => {
  const MOCK_DATA = "삼성역";

  return (
    <View style={styles.screenContainer}>
      <Modal
        visible={isFavoritesListModalOpen}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.titleText}>즐겨찾기 내역</Text>
            <View style={styles.returnValueContainer}>
              <Text style={styles.returnValueText}>{MOCK_DATA}</Text>
              <TouchableOpacity style={styles.favoriteButton}>
                <Text style={styles.favoriteButtonText}>
                  {STAR.FULFILLED_STAR}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsFavoritesListModalOpen(false)}
            >
              <Text style={styles.closeButtonText}>닫기</Text>
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
    width: "90%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLOR.BLACK,
    opacity: 0.7,
  },
  titleText: {
    marginBottom: 10,
    color: COLOR.WHITE,
    fontSize: 20,
  },
  returnValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  returnValueText: {
    width: "80%",
    marginVertical: 10,
    backgroundColor: COLOR.WHITE,
    color: COLOR.BLACK,
    textAlign: "center",
    fontSize: 25,
  },
  favoriteButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButtonText: {
    paddingHorizontal: 5,
    backgroundColor: COLOR.WHITE,
    color: COLOR.RED,
    fontSize: 25,
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: COLOR.BLUE,
  },
  closeButtonText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
});

export { FavoritesListModal };
