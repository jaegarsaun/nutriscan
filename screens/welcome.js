import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Swiper from "react-native-swiper";
import { Picker } from "@react-native-picker/picker";

export default function Welcome() {
  const [selectedGender, setGender] = useState("option1");

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        horizontal={true}
        loop={false}
      >
        {/* Element 1 Welcome */}
        <View style={styles.views}>
          <Text style={styles.header}> Welcome to NutriScan</Text>
          <Text style={styles.text}>
            To be able to provice acurate information to you, we must ask you a
            few questions
          </Text>
        </View>

        {/* Element 2. Gender */}
        <View style={styles.views}>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) =>
              setGender(itemValue)
            }
            style={styles.picker}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  wrapper: {
    // flex: 1,
  },
  views: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
  },
  picker: {
    width: 100,
    height: 100,
  }
});
