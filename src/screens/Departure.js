import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Geolocation from "react-native-geolocation-service";

import { COLOR, FONTSIZE } from "../config/constants";

const Departure = ({ navigation }) => {
  const [geolocation, setGeolocation] = useState({});
  const [departure, setDeparture] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setGeolocation(position);
      },
      (error) => {
        console.log(error.code, error.message);
        setGeolocation(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );

    fetch(`${SERVER_URI}/geolocation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ geolocation }),
    })
      .then(async (response) => {
        const jsonResponse = await response.json();
        if (jsonResponse.payload) {
          setDeparture(jsonResponse.payload);
        }
        setMessage(jsonResponse.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={styles.screenContainer}>
        <View style={styles.researchResultContainer}>
          {Array.isArray(departure) && departure.length > 0 ? (
            departure.map((station, key) => {
              return (
                <TouchableOpacity
                  style={styles.stationButton}
                  key={station}
                  onPress={() =>
                    navigation.navigate("Arrival", { departure: station })
                  }
                >
                  <Text style={styles.stationText}>{station}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={styles.messageText}>{message}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          testID="stationCheckButton"
          onPress={() => handleSubmit()}
        >
          <Text style={styles.searchText}>??? ?????? ????????? ????????????</Text>
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
  researchResultContainer: {
    justifyContent: "space-around",
    width: "70%",
  },
  messageText: {
    textAlign: "center",
    color: COLOR.RED,
    fontSize: FONTSIZE.MEDIUM,
  },
  stationButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginVertical: 20,
    backgroundColor: COLOR.BLUE,
  },
  stationText: {
    color: COLOR.WHITE,
    fontSize: FONTSIZE.MEDIUM,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: "70%",
    height: 70,
    backgroundColor: COLOR.PINK,
  },
  searchText: {
    color: COLOR.BLACK,
    fontSize: FONTSIZE.MEDIUM,
  },
});

export { Departure };
