import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/Css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';



export default function App() {

  const [origin, setOrigin] = useState(initialState: null);
  const [destination, setDestination] = useState(initialState: null);


  useEffect(effect:()=>{
    (async function(){
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
       let location = await Location.getCurrentPositionAsync(options:{ enableHighAccurancy: true });
        console.log(location);
      } else {
        throw new Error('Location permission not granted');
      }

    })();
  })

  return (
    <View style={css.container}>
      
      <MapView style={css.map}
         initialRegion={{
          latitude: -30.03360,
          longitude: -52.89601,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >

      </MapView>
      <View style={css.search}>

      </View>
    </View>
  );
}

