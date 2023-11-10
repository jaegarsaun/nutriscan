import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import Swiper from "react-native-swiper";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({navigation}) {
  const [selectedGender, setGender] = useState();
  const [selectedDiet, setDiet] = useState();

  const handlePress = async () => {
    // Set the gender & diet
    try{
      await AsyncStorage.setItem('diet', selectedDiet)
      await AsyncStorage.setItem('gender', selectedGender)

      // Set first time user to false
      await AsyncStorage.setItem('firstTime', 'false')
    
    }catch(e){
      // Do something with the error eventually
      console.log(e)
    }

  }

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
          <Text style={styles.header}>Please chose your sex</Text>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) =>
              setGender(itemValue)
            }
            style={styles.picker}
            
          >
            <Picker.Item label="Male" value="male"  style={styles.pickerItem}/>
            <Picker.Item label="Female" value="female" style={styles.pickerItem}/>
          </Picker>
          
        </View>
        <View style={styles.views}>
            <Text style={styles.header}>Are you trying to...</Text>
            <Picker
            selectedValue={selectedDiet}
            onValueChange={(itemValue, itemIndex) =>
              setDiet(itemValue)
            }
            style={styles.picker}
            
          >
            <Picker.Item label="Lose Weight" value="lose"  style={styles.pickerItem}/>
            <Picker.Item label="Gain Weight" value="gain" style={styles.pickerItem}/>
          </Picker>
        </View>

        {/* Final page. Welcome them and send them to the main app */}
        <View style={styles.views}>
          <Text style={styles.header}>Welcome to NutriScan</Text>
          <Text style={styles.text}>
            You are now ready to start using NutriScan. Click the button below
            to get started
          </Text>
          <Button title={'Goto App'} onPress={handlePress}></Button>
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
    width: '100%',
    height: 50,
  },
  pickerItem: {
    fontSize: 18,
    textAlign: 'center',
  },
});
