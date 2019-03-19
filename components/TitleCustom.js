import React,{Component} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import {Icon} from 'react-native-elements'
import { sharedStyle } from '../styles/shared.style';

class TitleCustom extends Component{
    render(){
        return(
            <View style={sharedStyle.titleFrame}>
                <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                    <Icon name="chevron-left" color="black" size={20}/>
                </TouchableOpacity>
                <Text style={[sharedStyle.textTitle, sharedStyle.fontWord]}>{this.props.action}</Text>
            </View>
        );
    }
}

export default TitleCustom