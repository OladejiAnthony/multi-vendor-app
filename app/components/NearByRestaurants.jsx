import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import uidata from "../constants/uidata";

const NearByRestaurants = () => {
  //console.log(uidata.restaurants)

  return (
    <View style={{ marginLeft: 12, marginTop: 10 }}>
      <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={({ item }) => <Text>{item.title}</Text>}
        
      />
    </View>
  );
};

export default NearByRestaurants;

const styles = StyleSheet.create({});
