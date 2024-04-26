import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserLocationContext } from '../context/UserLocationContext';
import { COLORS, SIZES } from '../constants/theme';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';

const GoogleMapView = ({placeList}) => {
  const [directions, setDirections] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [mapRegion, setMapRegion] = useState({
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421
  });
  const {location, setLocation} = useContext(UserLocationContext);


  return (
    <View style={styles.mapContainer}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      />
    </View>
  )
}


export default GoogleMapView

const styles = StyleSheet.create({
    mapContainer: {
        marginVertical: 8,
        width: SIZES.width - 20,
        height: 300,
        borderRadius: 12,
        borderColor: COLORS.gray2,
        borderWidth: 1
    },

})
