/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
            region={{
                latitude:53.1958628,
                longitude:-2.8790814,
                latitudeDelta:0.1,
                longitudeDelta:0.1
            }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  position: 'absolute',
  top:0,
  left:0,
  right:0,
  bottom:0,
  justifyContent: 'flex-end',
  alignItems:'center'
  },
  map:{
    position:'absolute',
    top:0,
    right:0,
    left:0,
    bottom:0
  }
});
