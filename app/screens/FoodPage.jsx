import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const FoodPage = ({route, navigation}) => {
    //we received the "route" from FoodNavigator component and the "navigation" from NewFoodList component
  const item = route.params.item; // we use the route to extract the particular item on this page for identification
  console.log(item);

  const [isChecked, setIsChecked] = useState(false);


  return (
    <View>
      <Text>FoodPage</Text>
    </View>
  )
}

export default FoodPage

const styles = StyleSheet.create({})


//We successfully passed the item data from a component into a navigator,then to be used on any page we want using route.params.
