import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Geolocation from "react-native-geolocation-service";

import { COLOR } from "../api/constants";

const Home = ({ navigation }) => {
  const [location, setLocation] = useState(false);
  const [geolocation, setGeolocation] = useState({});

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => {
        console.log(error.code, error.message);
        setLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
    );
    setGeolocation(location);
  };

  const getStation = () => {
    fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ geolocation }),
    })
      .then(async (response) => {
        const jsonResponse = await response.json();
        setGeolocation(jsonResponse.payload);
      })
      .catch((error) => console.log(error));
  };

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
            navigation.navigate("TextDetection");
            getLocation();
            getStation();
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
    justifyContent: "space-between",
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
    fontSize: 20,
  },
});

export { Home };
