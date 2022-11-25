import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GuideModal } from "../components/GuideModal";
import { CheckModal } from "../components/CheckModal";
import { SearchResultModal } from "../components/SearchResultModal";

import { COLOR } from "../api/constants";

const Camera = ({ navigation }) => {
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(true);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [isSearchResultModalOpen, setIsSearchResultModalOpen] = useState(false);
  const [navigateHome, setNavigateHome] = useState(false);
  const [navigateArrival, setNavigateArrival] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  const MOCK_DATA = {
    departure: "동묘앞",
    arrival: "숭례문",
    capturedNumber: "105",
  };

  const handleSubmit = () => {
    fetch(SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ MOCK_DATA }),
    })
      .then(async (response) => {
        const jsonResponse = await response.json();
        setSearchResult(jsonResponse.payload);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (navigateHome) {
      return navigation.goBack();
    }

    if (navigateArrival) {
      return navigation.navigate("Arrival");
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.guideText}>더 가까이 촬영해주세요.</Text>
        <Text style={styles.cameraText}>카메라 화면이 삽입될 예정입니다.</Text>
        <TouchableOpacity
          style={styles.detectionButton}
          onPress={() => setIsCheckModalOpen(true)}
        >
          <Text style={styles.detectionButtonText}>인식하기</Text>
        </TouchableOpacity>
      </View>
      <GuideModal
        isGuideModalOpen={isGuideModalOpen}
        setIsGuideModalOpen={setIsGuideModalOpen}
      />
      <CheckModal
        isCheckModalOpen={isCheckModalOpen}
        setIsCheckModalOpen={setIsCheckModalOpen}
        setNavigateArrival={setNavigateArrival}
        setIsSearchResultModalOpen={setIsSearchResultModalOpen}
      />
      <SearchResultModal
        isSearchResultModalOpen={isSearchResultModalOpen}
        setIsSearchResultModalOpen={setIsSearchResultModalOpen}
        setNavigateHome={setNavigateHome}
        searchResult={searchResult}
      />
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
