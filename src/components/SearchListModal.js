import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

import { COLOR, STAR } from "../api/constants";

const SearchListModal = ({
  isSearchListModalOpen,
  setIsSearchListModalOpen,
  searchList,
}) => {
  return (
    <View style={styles.screenContainer}>
      <Modal
        visible={isSearchListModalOpen}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.titleText}>관련 검색어</Text>
            <View>
              {searchList.map((searchResult, key) => {
                return (
                  <View style={styles.returnValueContainer} key={searchResult}>
                    <Text style={styles.returnValueText}>{searchResult}</Text>
                    <TouchableOpacity style={styles.favoriteButton}>
                      <Text style={styles.favoriteButtonText}>
                        {STAR.EMPTY_STAR}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsSearchListModalOpen(false)}
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
    alignItems: "center",
    width: "100%",
  },
  returnValueText: {
    width: "80%",
    height: 35,
    marginVertical: 10,
    backgroundColor: COLOR.WHITE,
    color: COLOR.BLACK,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
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

export { SearchListModal };
