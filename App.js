import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/main";
import AppNavigator from "./components/AppNavigator";
const Stack = createNativeStackNavigator();



export default function App() {
  const [firstTime, setFirstTime] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("firstTime");
      if (value !== null) {
        setFirstTime(true);
      }
    } catch (e) {
      console.log("Error reading value. Error: ", e);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={styles.container}> 
      {firstTime ? <Welcome /> : <AppNavigator />}
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
