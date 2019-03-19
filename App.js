// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


 /*-------------------------------------------------------*/
 import React, { Component } from "react";
 import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   Image
 } from "react-native";
 
 //library imports 
 import { Container, Content, Icon, Header, Body } from 'native-base'
 import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
 
 //custom files 
 import AppStackNavigator from './AppStackNavigator'
 import SettingsScreen from './SettingsScreen'
 import HomeScreen from "./HomeScreen";
 
 
 export default class App extends Component {
 
   render() {
     return (
       <MyApp />
     )
   }
 }
 
 const CustomDrawerContentComponent = (props) => (
 
   <Container>
     <Header style={styles.drawerHeader}>
       <Body>
         <Image
           style={styles.drawerImage}
           source={require('./assets/DrawerIcons/Unsure-Programmer-Logo.png')} />
       </Body>
     </Header>
     <Content>
       <DrawerItems {...props} />
     </Content>
 
   </Container>
 
 );
 
 const MyApp = DrawerNavigator({
 
   // For each screen that you can navigate to, create a new entry like this:
   Home: {
     screen: HomeScreen,
   },
   Settings: {
     screen: SettingsScreen
   }
 },
   {
     initialRouteName: 'Home',
     drawerPosition: 'left',
     contentComponent: CustomDrawerContentComponent,
     drawerOpenRoute: 'DrawerOpen',
     drawerCloseRoute: 'DrawerClose',
     drawerToggleRoute: 'DrawerToggle'
   });
 
 
 const styles = StyleSheet.create({
 
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   drawerHeader: {
     height: 200,
     backgroundColor: 'white'
   },
   drawerImage: {
     height: 150,
     width: 150,
     borderRadius: 75
   }
 
 })
 

