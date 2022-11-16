import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLOR } from "../api/constants";

const Camera = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.guideText}>더 가까이 촬영해주세요.</Text>
        <Text style={styles.cameraText}>카메라 화면이 삽입될 예정입니다.</Text>
        <TouchableOpacity style={styles.detectionButton}>
          <Text style={styles.detectionButtonText}>인식하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: COLOR.BLACK,
  },
  guideText: {
    width: "100%",
    marginVertical: 5,
    color: COLOR.RED,
    textAlign: "center",
    fontSize: 20,
  },
  cameraText: {
    color: COLOR.WHITE,
  },
  detectionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 70,
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: COLOR.BLUE,
  },
  detectionButtonText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
});

export { Camera };