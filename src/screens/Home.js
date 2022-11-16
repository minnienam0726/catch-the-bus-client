import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLOR } from "../api/constants";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.titleText}>
          <Text style={styles.titleSeoulText}>서울</Text>
          <Text style={styles.titleBusText}>버스 기사님,</Text>
          <Text style={styles.titleDestinationText}>*** 가시나요?</Text>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>출발하기</Text>
        </TouchableOpacity>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>카카오톡 로그인</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            로그인 후 즐겨찾기 사용이 가능합니다.
          </Text>
        </View>
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
    backgroundColor: COLOR.BLUE,
    borderRadius: 100,
  },
  startText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
  loginButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 70,
    backgroundColor: COLOR.YELLOW,
  },
  loginButtonText: {
    color: COLOR.BLACK,
    fontSize: 20,
  },
  loginText: {
    paddingTop: 10,
  },
});

export { Home };
