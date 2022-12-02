import { PermissionsAndroid, Platform } from "react-native";

const requestLocationPermission = async () => {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Geolocation Permission",
          message: "사용자의 위치 접근을 허용하시겠습니까?",
          buttonNeutral: "나중에",
          buttonNegative: "취소",
          buttonPositive: "확인",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("위치 접근을 허용합니다.");
      } else {
        console.log("위치 접근을 허용하지 않습니다.");
        alert("위치 접근 허용 후 서비스를 이용할 수 있습니다.");
      }
    } catch (error) {
      console.warn(error);
    }
  }
};

export { requestLocationPermission };
