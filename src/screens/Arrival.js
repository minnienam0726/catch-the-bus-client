import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLOR } from "../api/constants";

const Arrival = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="목적지를 설정해주세요."
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>검색</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.favoritesButton}>
          <Text style={styles.favoritesButtonText}>즐겨찾기 목록</Text>
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
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  searchTextInput: {
    width: "70%",
    borderWidth: 1,
    fontSize: 16,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    backgroundColor: COLOR.BLUE,
  },
  searchButtonText: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
  favoritesButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 50,
    marginTop: "20%",
    borderWidth: 1,
    backgroundColor: COLOR.PINK,
  },
  favoritesButtonText: {
    color: COLOR.BLACK,
    fontSize: 20,
  },
});

export { Arrival };
