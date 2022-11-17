import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

import { COLOR } from "../api/constants";

const GuideModal = ({ isGuideModalOpen, setIsGuideModalOpen }) => {
  const MOCK_DATA = require("../assets/image/testImage.png");

  return (
    <View style={styles.screenContainer}>
      <Modal visible={isGuideModalOpen} animationType="fade" transparent={true}>
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.guideText}>
              숫자 전체가 보이도록 촬영해주세요.
            </Text>
            <Image source={MOCK_DATA} />
            <TouchableOpacity
              style={styles.checkButton}
              onPress={() => setIsGuideModalOpen(false)}
            >
              <Text style={styles.checkButtonText}>확인</Text>
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
    padding: 20,
    margin: 20,
    borderRadius: 20,
    backgroundColor: COLOR.BLACK,
    opacity: 0.7,
  },
  guideText: {
    marginBottom: 20,
    color: COLOR.WHITE,
    fontSize: 15,
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

export { GuideModal };
