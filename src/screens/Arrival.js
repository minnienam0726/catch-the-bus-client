import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLOR, FONTSIZE } from "../config/constants";

const Arrival = ({ route, navigation }) => {
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { departure } = route.params;

  useEffect(() => {
    fetch(`${SERVER_URI}/search/station`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then(async (response) => {
        const jsonResponse = await response.json();
        setSearchList(jsonResponse.payload);
      })
      .catch((error) => console.log(error));
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="목적지를 검색하세요."
          onChangeText={setText}
        />
        <ScrollView style={styles.scrollView}>
          <View style={styles.researchResultContainer}>
            {searchList.map((station, key) => {
              return (
                <TouchableOpacity
                  style={styles.stationButton}
                  key={station}
                  onPress={() => {
                    navigation.navigate("Result", {
                      stations: {
                        departure: departure,
                        arrival: station,
                      },
                    });
                  }}
                >
                  <Text style={styles.stationText}>{station}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  searchTextInput: {
    width: "70%",
    borderWidth: 1,
    fontSize: 16,
  },
  scrollView: {
    width: "70%",
    backgroundColor: COLOR.GRAY,
    padding: 10,
  },
  researchResultContainer: {
    justifyContent: "space-around",
    width: "70%",
  },
  stationButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginVertical: 5,
  },
  stationText: {
    color: COLOR.WHITE,
    fontSize: FONTSIZE.SMALL,
  },
});

export { Arrival };
