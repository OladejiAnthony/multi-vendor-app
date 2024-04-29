import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useContext } from "react";
import uidata from "../../constants/uidata";
import FoodTile from "../../components/FoodTile";
import { useNavigation } from "@react-navigation/native";
import { RestaurantContext } from "../../context/RestaurantContext";

const New = () => {
  const { restaurantObj, setRestaurantObj } = useContext(RestaurantContext);
  //console.log(restaurantObj)
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        data={uidata.foods}
        showsVerticalScrollIndicator={true}
        style={{ marginTop: 5 }}
        keyExtractor={(item) => item._id}
        // numColumns={2}
        scrollEnabled
        renderItem={({ item }) => (
          <FoodTile
            item={item}
            showDetails={() => navigation.navigate("food-nav", item)}
          />
        )}
      />
    </View>
  );
};

export default New;

const styles = StyleSheet.create({});


