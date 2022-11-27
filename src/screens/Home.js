import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLOR, FONTSIZE } from "../api/constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.titleText}>
          <Text style={styles.titleSeoulText}>서울</Text>
          <Text style={styles.titleBusText}>버스 기사님,</Text>
          <Text style={styles.titleDestinationText}>*** 가시나요?</Text>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            navigation.navigate("Departure");
          }}
        >
          <Text style={styles.startButtonText}>출발하기</Text>
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
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleText: {
    width: "70%",
  },
  titleSeoulText: {
    paddingBottom: 5,
    textAlign: "left",
    fontSize: 20,
  },
  titleBusText: {
    textAlign: "left",
    fontSize: 40,
  },
  titleDestinationText: {
    paddingTop: 5,
    textAlign: "right",
    fontSize: 30,
  },
  startButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 70,
    borderRadius: 100,
    backgroundColor: COLOR.BLUE,
  },
  startButtonText: {
    color: COLOR.WHITE,
    fontSize: FONTSIZE.MEDIUM,
  },
});

export { Home };
