import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { RestaurantContext } from '../../context/RestaurantContext'
import GoogleMapView from '../../components/GoogleMapView'

const Direction = () => {
  const {restaurantObj, setRestaurantObj} = useContext(RestaurantContext)
  //console.log(restaurantObj)

  const coords = restaurantObj.coords;
  //console.log(coords)



  return (
    <View>
      <GoogleMapView placeList={[coords]}  />
    </View>
  )
}

export default Direction

const styles = StyleSheet.create({})

