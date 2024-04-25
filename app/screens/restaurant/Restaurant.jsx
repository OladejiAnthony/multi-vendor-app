import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RestaurantPage from "../../navigation/RestaurantPage";
import NetworkImage from "../../components/reusable/NetworkImage";
import { COLORS, SIZES } from "../../constants/theme";
import { useRoute } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Restaurant = ({ navigation }) => {
  const route = useRoute();
  const item = route.params;
  //console.log(item);

  return (
    <View>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goback()}
            style={styles.backbtn}
          >
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.primary}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.sharebtn}>
            <MaterialCommunityIcons
              name="share-circle"
              size={30}
              color={COLORS.primary}
            />
          </TouchableOpacity>

          <NetworkImage
            data={item.imageUrl}
            height={SIZES.height / 3.4}
            width={SIZES.width}
            radius={20}
          />
          <View style={styles.rating}></View>
        </View>

        <View style={{ height: 200 }}></View>

        <View style={{ height: 500 }}>
          <RestaurantPage />
        </View>
      </ScrollView>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  backbtn: {
    marginLeft: 12,
    alignItems: "center",
    zIndex: 999,
    position: "absolute",
    top: SIZES.xxLarge,
  },
  sharebtn: {
    marginRight: 12,
    alignItems: "center",
    zIndex: 999,
    right: 0,
    position: "absolute",
    top: SIZES.xxLarge + 3,
  },
  title: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.black,
  },
  rating: {
    height: 50,
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    backgroundColor: "#00fff53c",
    zIndex: 999,
    bottom: 0,
    borderRadius: 15,
  },
});
