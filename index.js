import { AppRegistry } from 'react-native';
import MyApp2 from './DrawerNav';

import React, { Component } from 'react';
import {  Image } from 'react-native';

AppRegistry.registerComponent('ThucTapProject', () => MyApp2)




export  class Bananas extends Component {
    constructor(props) {
        super(props)
        this.state = { A: 1 }
    }
    componentDidMount(){
        this.setState({A:3})
        console.log(this.state.A)

    }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}