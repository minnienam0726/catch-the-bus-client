import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Camera } from "../screens/Camera";
import { Arrival } from "../screens/Arrival";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Catch the bus" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Arrival" component={Arrival} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
