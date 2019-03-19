import { AsyncStorage } from "react-native"
import { View, Text } from "react-native";
import React from "react";


export default class AsyncStorageScreen extends React.Component {


  render() {

  storeData = async () => {
      try {
        await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
      } catch (error) {
        console.log(error)
      }
    }

    var val="Chua có gì";
    retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('@MySuperStore:key');
        console.log("-102");
        if (value !== null) {
          // We have data!!
          val = value;
          console.log("123" + val);

        }
       
      } catch (error) {
        console.log("Lỗi" + error)
      }
    }

    retrieveData();
    if (val == null) {
      alert('Set đây nha');
      storeData();
    }
    else{
      console.log('456Đã tồn tại');
      console.log("678"+val)
    }

    // storeData();
    // retrieveData();
    return (
      <View>
        {/* <Text>{value}</Text> */}
      </View>
    );
  }
}