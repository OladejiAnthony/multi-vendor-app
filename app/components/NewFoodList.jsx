import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import uidata from "../constants/uidata";
import FoodComp from "./FoodComp";
import { useNavigation } from "@react-navigation/native";

const NewFoodList = () => {
  //console.log(uidata.foods)
  const navigation = useNavigation();
  const renderItem = ({ item }) => <FoodComp item={item} onPress={() => navigation.navigate("food-nav", item)} />;
  //when we navigate to "food-nav" we pass an item along from this component.
  //in the FoodNavigator component, we also received the item as prop.

  return (
    <View style={{marginLeft: 12, marginBottom: 10}}>
        <FlatList
        data={uidata.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={renderItem}
        />
    </View>
  );
};

export default NewFoodList;

const styles = StyleSheet.create({});


