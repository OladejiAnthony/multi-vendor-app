import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import NetworkImage from "./reusable/NetworkImage";

const FoodComp = ({ item, onPress }) => {
  //console.log(item)
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <NetworkImage
        data={item.imageUrl[0]}
        height={SIZES.height / 5.8}
        width={SIZES.width - 60}
        radius={16}
        mode={"cover"}
      />
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={styles.small}>{item.time} - delivery time</Text>
    </TouchableOpacity>
  );
};

export default FoodComp;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 8,
    borderRadius: 16,
  },
  heading: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.gray,
  },
  small: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.gray,
  },
});

//1hr 49mins
