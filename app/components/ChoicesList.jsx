import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import uidata from "../constants/uidata";
import { COLORS } from "../constants/theme";

const ChoicesList = ({ setSelectedChoice, setSelectedSection }) => {
  const [selected, setSelected] = useState(null);

  //console.log(uidata.choicesList);
  const handlePress = (item) => {
    if (selected == item.value) {
      setSelected(null);
      setSelectedChoice(null);
      setSelectedSection(null);
    } else {
      setSelectedChoice(item.value);
      setSelected(item.value);
      setSelectedSection("restaurant");
    }
  };

  return (
    <View>
      <Text
        style={{
          marginLeft: 16,
          marginVertical: 12,
          fontSize: 18,
          fontFamily: "bold",
        }}
      >
        Pick Restaurants
      </Text>

      <FlatList
        data={uidata.choicesList}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={{
              backgroundColor:
                selected === item.value ? COLORS.secondary : COLORS.lightWhite,
              height: 40,
              borderRadius: 12,
              marginHorizontal: 8,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginHorizontal: 10,
                fontFamily: "regular",
                fontSize: 13,
                color: item.value == selected ? COLORS.lightWhite : COLORS.gray,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoicesList;

const styles = StyleSheet.create({});
