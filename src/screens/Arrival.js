import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchListModal } from "../components/SearchListModal";
import { FavoritesListModal } from "../components/FavoritesListModal";

import { COLOR } from "../api/constants";

const Arrival = () => {
  const [isSearchListModalOpen, setIsSearchListModalOpen] = useState(false);
  const [isFavoritesListModalOpen, setIsFavoritesListModalOpen] =
    useState(false);
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleSubmit = () => {
    fetch(SERVER_URL, {
      method: "POST",
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="목적지를 설정해주세요."
            onChangeText={setText}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              handleSubmit();
              setIsSearchListModalOpen(true);
            }}
          >
            <Text style={styles.searchButtonText}>검색</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.favoritesButton}
          onPress={() => setIsFavoritesListModalOpen(true)}
        >
          <Text style={styles.favoritesButtonText}>즐겨찾기 목록</Text>
        </TouchableOpacity>
      </View>
      <SearchListModal
        isSearchListModalOpen={isSearchListModalOpen}
        setIsSearchListModalOpen={setIsSearchListModalOpen}
        searchList={searchList}
      />
      <FavoritesListModal
        isFavoritesListModalOpen={isFavoritesListModalOpen}
        setIsFavoritesListModalOpen={setIsFavoritesListModalOpen}
      />
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
