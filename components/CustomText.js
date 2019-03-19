import React, { Component } from 'react';
import {Text } from 'react-native'
class CustomText extends Component {
    render() {
        return (
            <Text style={{fontSize: 15}}>{this.props.children}</Text>
        );
    }
}

export default CustomText