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

import { COLOR, FONTSIZE } from "../api/constants";

const Result = ({ route, navigation }) => {
  const [boardingBus, setBoardingBus] = useState({});
  const [navigateHome, setNavigateHome] = useState(false);
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  const { stations } = route.params;

  const busRoute = Object.entries(boardingBus);
  const busNumber = Object.keys(boardingBus);
  const searchNumber = busNumber.filter((number) => number == text);

  useEffect(() => {
    searchNumber[0] ? setAnswer("타세요!") : setAnswer("");
  }, [searchNumber]);

  useEffect(() => {
    fetch(`${SERVER_URI}/search/bus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stations }),
    })
      .then(async (response) => {
        const jsonResponse = await response.json();
        setBoardingBus(jsonResponse.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (navigateHome) {
      return navigation.navigate("Home");
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.message}>
          {busNumber ? "이 버스를 탑승하세요!" : "직행 버스가 없습니다!"}
        </Text>
        <ScrollView style={styles.scrollView}>
          <View>
            {busRoute.map((bus, key) => {
              return (
                <Text style={styles.resultText} key={bus[0]}>
                  버스 번호: {bus[0]} / 정류장 수: {bus[1]}
                </Text>
              );
            })}
          </View>
        </ScrollView>
        <TextInput
          style={styles.searchTextInput}
          placeholder="이 버스가 갈까요?"
          onChangeText={setText}
        />
        <Text style={styles.answerText}>{answer}</Text>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => {
            setNavigateHome(true);
          }}
        >
          <Text style={styles.homeButtonText}>처음으로</Text>
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  message: {
    margin: 20,
    color: COLOR.BLACK,
    fontSize: FONTSIZE.LARGE,
  },
  scrollView: {
    width: "70%",
    padding: 10,
    backgroundColor: COLOR.YELLOW,
  },
  resultText: {
    margin: 10,
    color: COLOR.BLACK,
    fontSize: FONTSIZE.SMALL,
  },
  searchTextInput: {
    width: "70%",
    margin: 10,
    borderWidth: 1,
    fontSize: 16,
  },
  answerText: {
    color: COLOR.RED,
    fontSize: FONTSIZE.SMALL,
  },
  homeButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: COLOR.BLUE,
  },
  homeButtonText: {
    color: COLOR.WHITE,
    fontSize: FONTSIZE.MEDIUM,
  },
});

export { Result };
