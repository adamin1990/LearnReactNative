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
  ListView,
  Text,
  View,
} from 'react-native';

// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var MOCKED_MOVIES_DATA = [
  {title: 'X战警：天启', year: '2016', posters: {thumbnail: 'http://img31.mtime.cn/mt/2016/05/25/161352.96089978_100X140X4.jpg'}},
];
var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;


class ReatNativeDemo extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //   movies: null,
  //   };
  // }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //   dataSource: new ListView.DataSource({
  //     rowHasChanged: (row1,row2) => row1!==row2,
  //   }),
  //   loaded: false,
  //   };
  // }

   constructor(props){
    super(props);
    this.state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
    };
  }
 componentDidMount() {
    this.fetchData();
  }
 // fetchData() {
 //    fetch(REQUEST_URL)
 //      .then((response) => response.json())
 //      .then((responseData) => {
 //        this.setState({
 //          movies: responseData.movies,
 //        });
 //      })
 //      .done();
 //  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseData)=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded:true,
        });
      })
      .done();
  }


 // render() {
 //    if (!this.state.movies) {
 //      return this.renderLoadingView();
 //    }

 //    var movie = this.state.movies[0];
 //    return this.renderMovie(movie);
 //  }

   render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}>
        </ListView>
     
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

   

  // render() {
  //   var movie=MOCKED_MOVIES_DATA[0];
  //   return (
  //     <View style={styles.container}>
     
  //     <Image
  //         source={{uri: movie.posters.thumbnail}}
  //         style={styles.thumbnail}
  //       />
  //       <View style={styles.rightContainer}>
  //          <Text style={styles.title}>
  //        {movie.title}
  //       </Text>
  //       <Text style={styles.year}>
  //         {movie.year}
  //       </Text>
  //       </View>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer:{
    flex:1,



  },
  title: {
    fontSize:20,
    marginBottom:8,
    textAlign: 'center',
    color: '#0288d1',
  },
  year: {
    textAlign: 'center',
  },
   listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
 
});
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
// });

AppRegistry.registerComponent('ReatNativeDemo', () => ReatNativeDemo);
