import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

import { COLOR, MESSAGE, GUIDE_IMAGE } from "../api/constants";

const GuideModal = () => {
  return (
    <View style={styles.screenContainer}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.screenContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.guideText}>{MESSAGE.DEPARTURE}</Text>
            <Image source={GUIDE_IMAGE.DEPARTURE} />
            <TouchableOpacity style={styles.checkButton}>
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
  },
  guideText: {
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
