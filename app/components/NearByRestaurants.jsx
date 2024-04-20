import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import uidata from "../constants/uidata";
import StoreComp from "./StoreComp";

const NearByRestaurants = () => {
  //console.log(uidata.restaurants)

  return (
    <View style={{ marginLeft: 12}}>
      <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={({ item }) => (
          <StoreComp item={item} onPress={()=> {}} />
        )}
        
      />
    </View>
  );
};

export default NearByRestaurants;

const styles = StyleSheet.create({});
