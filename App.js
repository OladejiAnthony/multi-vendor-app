import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";
import BottomTab from "./app/navigation/BottomTab";
import { UserLocationContext } from "./app/context/UserLocationContext";
import { UserReversedGeoCode } from "./app/context/UserReversedGeoCode";
import FoodNavigator from "./app/navigation/FoodNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null); //console.log(location)
  const [address, setAddress] = useState(null); //console.log(address)
  const [errorMsg, setErrorMsg] = useState("");

  const defaultAddresss = {
    city: "Shanghai",
    country: "China",
    district: "Pudong",
    isoCountryCode: "CN",
    name: "33 East Nanjing Rd",
    postalCode: "94108",
    region: "SH",
    street: "Stockton St",
    streetNumber: "1",
    subregion: "San Francisco County",
    timezone: "America/Los_Angeles",
  };

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  //get current location
  useEffect(() => {
    (async () => {
      setAddress(defaultAddresss);
      //get permission from user
      let status = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      } //console.log(status)
      //get userLocation
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      //console.log(location)
    })();
  }, []);

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <UserReversedGeoCode.Provider value={{ address, setAddress }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="bottom-navigation"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="food-nav"
              component={FoodNavigator}
              options={{ headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserReversedGeoCode.Provider>
    </UserLocationContext.Provider>
  );
}

{
  /* 
  console.log(location)
  {
    "coords": 
      {"accuracy": 100, "altitude": 326.79998779296875, "altitudeAccuracy": 100, "heading": 0, "latitude": 8.4816482, "longitude": 4.5378835, "speed": 0
      }, 
    "mocked": false, 
    "timestamp": 1713569081398
  }

*/
}
