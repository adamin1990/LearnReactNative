/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

import React,{
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'X战警：天启', year: '2016', posters: {thumbnail: 'http://img31.mtime.cn/mt/2016/05/25/161352.96089978_100X140X4.jpg'}},
];
class ReatNativeDemo extends Component {
  render() {
    var movie=MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
     
      <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
           <Text style={styles.title}>
         {movie.title}
        </Text>
        <Text style={styles.year}>
          {movie.year}
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91e63',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer:{
    flex:1,
    backgroundColor:'#ffffff',
  

  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign: 'center',
    color: '#0288d1',
  },
  year:{
    textAlign: 'center',
  },
 
});

AppRegistry.registerComponent('ReatNativeDemo', () => ReatNativeDemo);
